import { useState, useEffect, useReducer } from "react";
import SecondsToMinutes from "../../functions/SecondsToMinutes";
import Card from "./UI/Card";
import styles from "./StopWatch.module.css";
const { v4: uuidv4 } = require("uuid");

const buttonReducer = (prevState, action) => {
  return {
    isStop: prevState.isStop ? false : true,
    startedAt: prevState.isStop ? Date.now() : prevState.startedAt,
  };
};

const StopWatch = (props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const [buttonState, dispatchButton] = useReducer(buttonReducer, {
    isStop: true,
    startedAt: Date(),
  });

  useEffect(() => {
    window.addEventListener("focus", function () {
      const duration = Math.floor((Date.now() - buttonState.startedAt) / 1000);
      setCurrentTime((prevState) => (prevState === 0 ? 0 : duration));
    });
  }, [buttonState.isStop]);

  useEffect(() => {
    if (buttonState.isStop) {
      if (currentTime > 0) {
        props.onSetTimeLine((prevState) => [
          ...prevState,
          {
            id: uuidv4(),
            duration: currentTime,
            tag: props.tag,
            startedAt: buttonState.startedAt,
          },
        ]);
      }
      setCurrentTime(0);
      clearInterval(intervalId);
    } else {
      setIntervalId((prevStates) =>
        setInterval(() => {
          setCurrentTime((prevState) => prevState + 1);
        }, 1000)
      );
    }
  }, [buttonState.isStop]);

  const stopWatchButtonHandler = () => {
    dispatchButton({});
  };

  return (
    <Card className={styles["stop-watch"]}>
      <h1 className={styles.title}>{SecondsToMinutes(currentTime)}</h1>
      <button className={styles.button} onClick={stopWatchButtonHandler}>
        {buttonState.isStop ? "Start" : "Stop"}
      </button>
    </Card>
  );
};

export default StopWatch;
