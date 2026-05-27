import React from "react";

const Spinner = ({
  size = "16px",
  color = "currentColor",
  showText = true,
  text = "Submitting...",
  className = ""
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center gap-2 ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
    >
      <span 
        className="spinner"
        style={{
          width: size,
          height: size,
          border: `2px solid ${color}`,
          borderTopColor: "transparent",
          borderRadius: "50%",
          display: "inline-block",
        }}
      />
      {showText && <span style={{ fontSize: "0.95em", opacity: 0.9 }}>{text}</span>}
    </div>
  );
};

export default Spinner;