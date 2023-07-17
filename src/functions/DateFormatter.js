const DateFormatter = (date, format) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const year = dateObj.getFullYear();
  const dayOfWeek = dateObj.toLocaleString("en-us", { weekday: "short" });

  return format
    .replace(/dow/g, dayOfWeek)
    .replace(/d/g, day)
    .replace(/y/g, year)
    .replace(/h/g, dateObj.getHours())
    .replace(/min/g, minutes < 10 ? `0${minutes}` : minutes)
    .replace(/m/g, month)
    .replace(/s/g, seconds);
};

export default DateFormatter;
