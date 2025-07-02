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

export const getCurrentDate = () => {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const getCurrentDateAndTime = () => {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}.${month}.${year}`;
};
