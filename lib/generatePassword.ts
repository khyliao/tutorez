export const generatePassword = (length = 8) =>
  Array.from({ length }, () => Math.random().toString(36)[2]).join("");
