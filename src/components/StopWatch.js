import { useState } from "react";
import SecondsToMinutes from "../functions/SecondsToMinutes";
import Card from "./Card";
import "./StopWatch.css";
const { v4: uuidv4 } = require("uuid");

const StopWatch = (props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const [intervalEl, setIntervalEl] = useState(null);
  const [startedAt, setStartedAt] = useState(Date());

  const stopWatchButtonHandler = () => {
    if (isStop) {
      setStartedAt(Date());
      setIntervalEl(
        setInterval(() => {
          setCurrentTime((prevState) => prevState + 1);
        }, 1000)
      );
    } else {
      clearInterval(intervalEl);
      if (currentTime > 0) {
        props.onSetTimeLine((prevState) => [
          ...prevState,
          {
            id: uuidv4(),
            duration: currentTime,
            tag: props.tag,
            startedAt: startedAt,
          },
        ]);
      }

      setCurrentTime(0);
    }

    setIsStop((prevState) => !prevState);
  };

  return (
    <Card className="notHover">
      <div className="stopwatch-container">
        <h1 className="stopwatch-title">{SecondsToMinutes(currentTime)}</h1>
        <button className="stopwatch-button" onClick={stopWatchButtonHandler}>
          {isStop ? "Start" : "Stop"}
        </button>
      </div>
    </Card>
  );
};

export default StopWatch;
