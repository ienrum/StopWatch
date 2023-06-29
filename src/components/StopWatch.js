import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";

const StopWatch = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const [intervalEl, setIntervalEl] = useState(null);

  const stopWatchButtonHandler = () => {
    if (isStop) {
      setIntervalEl(
        setInterval(() => {
          setCurrentTime((prevState) => prevState + 1);
        }, 1000)
      );
    } else {
      clearInterval(intervalEl);
      setCurrentTime(0);
    }

    setIsStop((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Current Time: {currentTime}</h2>
      <button onClick={stopWatchButtonHandler}>
        {isStop ? "Start" : "Stop"}
      </button>
    </div>
  );
};

export default StopWatch;
