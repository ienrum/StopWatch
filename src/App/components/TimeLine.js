import { useState } from "react";
import { TAGS } from "../../datas/Tags";
import SecondsToMinutes from "../../functions/SecondsToMinutes";
import DateFormatter from "../../functions/DateFormatter";
import Card from "./UI/Card";
import styles from "./TimeLine.module.css";

const Timeline = (props) => {
  let timeLine = props.timeLine.filter((time) => time.tag === props.tagOption);
  let totalTime = 0;
  if (props.tagOption === TAGS.ALL) {
    timeLine = props.timeLine;
  }

  timeLine.forEach((time) => {
    totalTime += time.duration;
  });

  const onDeleteHandler = (id) => {
    return () => {
      props.onSetTimeLine((prevState) =>
        prevState.filter((time) => time.id !== id)
      );
    };
  };

  return (
    <>
      <h2 className={styles["total-time"]}>
        Total Time: {SecondsToMinutes(totalTime)}
      </h2>
      {timeLine.map((time) => (
        <Card
          onClick={onDeleteHandler(time.id)}
          key={time.id}
          className={styles["timeline-element-container"]}
          tag={time.tag}
        >
          <div className={styles.tag}>{time.tag}</div>
          <div className={styles["sub-information"]}>
            <div className={styles.duration}>
              {SecondsToMinutes(time.duration)}
            </div>
            <div className={styles["started-at"]}>
              {DateFormatter(time.startedAt, "m/d/y h:min:s")}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Timeline;
