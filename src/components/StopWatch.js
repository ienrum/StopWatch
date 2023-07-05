import { useState, useEffect, useReducer } from "react";
import SecondsToMinutes from "../functions/SecondsToMinutes";
import Card from "./UI/Card";
import styles from "./StopWatch.module.css";
const { v4: uuidv4 } = require("uuid");

const buttonReducer = (prevState, action) => {
  return {
    isStop: prevState.isStop ? false : true,
    startedAt: Date.now(),
  };
};

const StopWatch = (props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervals, setIntervals] = useState([]);
  let cnt = 0;
  const [buttonState, dispatchButton] = useReducer(buttonReducer, {
    type: "STOP",
    isStop: true,
    startedAt: Date(),
    a,
  });
  // useEffect(() => {
  //   window.addEventListener(
  //     "focus",
  //     function () {
  //       const duration = Math.floor(
  //         (Date.now() - buttonState.startedAt) / 1000
  //       );
  //       setCurrentTime((prevState) => (prevState === 0 ? 0 : duration));
  //     },
  //     false
  //   );
  // }, [buttonState.isStop]);

  useEffect(() => {
    return () => {
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
        intervals.forEach((interval) => {
          // console.log(interval);
          clearInterval(interval);
        });
      } else {
        // console.log("start");
        setIntervals((prevStates) => {
          // if (prevStates.length > 0) {
          //   return;
          // }
          const temp = setInterval(() => {
            setCurrentTime((prevState) => prevState + 1);
          }, 1000);
          let ok = [...prevStates, temp];
          console.log(ok, prevStates);
          return ok;
        });
      }
    };
  }, [buttonState.isStop]);

  const stopWatchButtonHandler = (event) => {
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
