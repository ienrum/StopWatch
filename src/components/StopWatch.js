import { useState, useEffect } from "react";
import SecondsToMinutes from "../functions/SecondsToMinutes";
import Card from "./UI/Card";
import styles from "./StopWatch.module.css";
const { v4: uuidv4 } = require("uuid");

const StopWatch = (props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const [intervalEl, setIntervalEl] = useState(null);
  const [startedAt, setStartedAt] = useState(Date());

  useEffect(() => {
    window.addEventListener(
      "focus",
      function () {
        const duration = Math.floor((Date.now() - startedAt) / 1000);
        setCurrentTime((prevState) => (prevState === 0 ? 0 : duration));
      },
      false
    );
  }, [isStop]);

  const stopWatchButtonHandler = () => {
    if (isStop) {
      setStartedAt(Date.now());
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
    <Card className={styles["stop-watch"]}>
      <h1 className={styles.title}>{SecondsToMinutes(currentTime)}</h1>
      <button className={styles.button} onClick={stopWatchButtonHandler}>
        {isStop ? "Start" : "Stop"}
      </button>
    </Card>
  );
};

export default StopWatch;
