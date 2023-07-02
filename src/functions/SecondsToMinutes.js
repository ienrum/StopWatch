const SecondsToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  const secondsLeft = seconds % 60;
  const secondsFormatted = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  return `${hours > 0 ? hours + ":" : ""}${minutesLeft}:${secondsFormatted}`;
};

export default SecondsToMinutes;
