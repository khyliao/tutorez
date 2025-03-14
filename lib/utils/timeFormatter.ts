export const convertToTimeString = (number: number) => {
  const absoluteNumber = Math.abs(number);

  const hours = Math.floor(absoluteNumber);
  const minutes = Math.round((absoluteNumber - hours) * 60);

  let result = [];
  if (hours > 0) result.push(`${hours} год`);
  if (minutes > 0) result.push(`${minutes} хв`);

  if (result.length > 0) {
    if (number > 0) {
      return result.join(" ");
    }

    return `-${result.join(" ")}`;
  } else {
    return "0 год";
  }
};
