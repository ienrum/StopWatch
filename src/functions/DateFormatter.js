const DateFormatter = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const minutes = dateObj.getMinutes();
  const year = dateObj.getFullYear();
  return `${month}/${day}/${year} ${dateObj.getHours()}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

export default DateFormatter;
