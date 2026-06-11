/**
 * Utility for performing static analysis and runtime safety instrumentation on compiler input.
 */

/**
 * Instruments loops (for, while, do-while) with auto-breaking safety counters
 * to prevent the sandbox or main browser thread from freezing.
 * @param {string} code 
 * @returns {string}
 */
export const instrumentLoopSafety = (code) => {
  if (!code) return code;
  
  let loopCounter = 0;
  const loopRegex = /\b(while|for|do)\b\s*\(([^)]*)\)\s*\{/g;
  
  // A helper that injects a runtime checker at the beginning of each loop block
  // We keep a registry of loops to prevent runtime infinite iterations.
  let instrumented = code;
  
  // Find all loops and inject a safety check
  let match;
  let offset = 0;
  const originalCode = code;
  
  // Match standard loops with braces
  // Simplistic but highly effective loop protection mechanism
  const insertionPrefix = `
    let __loop_guard_${loopCounter} = 0;
  `;
  
  // We will insert a loop-buster script before compiling
  const loopBusterHead = `
    let __loop_guards = {};
    const __check_loop = (id) => {
      __loop_guards[id] = (__loop_guards[id] || 0) + 1;
      if (__loop_guards[id] > 5000) {
        throw new Error("Potential infinite loop detected! Execution halted to protect your browser tab.");
      }
    };
  `;

  // Parse and check for basic malicious keywords
  return `${loopBusterHead}\n${originalCode.replace(/\b(while|for|do)\s*\(([^)]*)\)\s*\{/g, (match, type, condition) => {
    const loopId = ++loopCounter;
    return `${type} (${condition}) { __check_loop(${loopId}); `;
  })}`;
};

/**
 * Validates javascript strings for unsafe commands or context-escaping keywords.
 * @param {string} code 
 * @returns {{ safe: boolean, error?: string }}
 */
export const validateStaticSafety = (code) => {
  if (!code) return { safe: true };

  const unsafePatterns = [
    { regex: /window\.parent\b/, name: "Parent context escape access (window.parent)" },
    { regex: /window\.top\b/, name: "Top-level frame redirection (window.top)" },
    { regex: /document\.cookie\b/, name: "Cookie storage extraction (document.cookie)" },
    { regex: /localStorage\b/, name: "Local storage persistence access (localStorage)" },
    { regex: /sessionStorage\b/, name: "Session storage access (sessionStorage)" },
    { regex: /location\.replace\b/, name: "Location redirection (location.replace)" },
  ];

  for (const pattern of unsafePatterns) {
    if (pattern.regex.test(code)) {
      return {
        safe: false,
        error: `Security Alert: Unsafe browser API usage detected: ${pattern.name}. Please remove this expression to execute code.`,
      };
    }
  }

  return { safe: true };
};
