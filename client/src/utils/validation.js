export const validateEmail = (email) => {
  if (!email) return "Email is required";

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Password is required";

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (!hasUppercase || !hasLowercase || !hasDigit || !hasSpecial) {
    return "Password must contain uppercase, lowercase, a number, and a special character";
  }

  return "";
};

export const validateUsername = (username) => {
  if (!username) return "Username is required";

  if (username.length < 3) {
    return "Username must be at least 3 characters";
  }

  return "";
};
export const validateCollege = (college) => {
  if (!college) return "College is required";

  if (college.length < 2) {
    return "College name must be at least 2 characters";
  }

  return "";
};

export const validateYear = (year) => {
  if (!year) return "Year is required";

  const validYears = ["1", "2", "3", "4"];

  if (!validYears.includes(year)) {
    return "Please enter a valid academic year";
  }

  return "";
};