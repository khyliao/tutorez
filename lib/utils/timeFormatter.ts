export const convertToTimeString = (number: number) => {
  const absoluteNumber = Math.abs(number);

  const hours = Math.floor(absoluteNumber);
  const minutes = Math.round((absoluteNumber - hours) * 60);

  let result = [];
  if (hours > 0) result.push(`${hours} год`);
  if (minutes > 0) result.push(`${minutes} хв`);

  return result.length > 0 ? result.join(" ") : "0 год";
};
