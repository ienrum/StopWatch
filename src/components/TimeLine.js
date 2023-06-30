import { useState } from "react";
import { TAGS } from "../datas/Tags";
import SecondsToMinutes from "../functions/SecondsToMinutes";
import DateFormatter from "../functions/DateFormatter";
import Card from "./Card";
import "./TimeLine.css";

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
      console.log(id);
      props.onSetTimeLine((prevState) =>
        prevState.filter((time) => time.id !== id)
      );
    };
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-total-time">
        Total Time: {SecondsToMinutes(totalTime)}
      </h2>
      {timeLine.map((time) => (
        <Card
          onClick={onDeleteHandler(time.id)}
          key={time.id}
          className="timeline-card"
          tag={time.tag}
        >
          <div className="timeline-duration">
            {SecondsToMinutes(time.duration)}
          </div>
          <div className="timeline-subTags">
            <div className="timeline-tag">{time.tag}</div>
            <div className="timeline-started-at">
              {DateFormatter(time.startedAt)}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Timeline;
