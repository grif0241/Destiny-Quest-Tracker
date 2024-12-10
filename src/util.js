export const capitalizeString = (str) => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const convertStringToLowerCase = (str) => {
  return str.toLowerCase();
}

export const capitalizeStringAllLetters = (str) => {
  return str.toUpperCase();
}