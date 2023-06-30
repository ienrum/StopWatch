const SecondsToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const secondsFormatted = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  return `${minutes}:${secondsFormatted}`;
};

export default SecondsToMinutes;
