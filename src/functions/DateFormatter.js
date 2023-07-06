const DateFormatter = (date, format) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const year = dateObj.getFullYear();
  const dayOfWeek = dateObj.toLocaleString("en-us", { weekday: "short" });

  return format
    .replaceAll("dow", dayOfWeek)
    .replaceAll("d", day)
    .replaceAll("y", year)
    .replaceAll("h", dateObj.getHours())
    .replaceAll("min", minutes < 10 ? `0${minutes}` : minutes)
    .replaceAll("m", month)
    .replaceAll("s", seconds);
};

export default DateFormatter;
