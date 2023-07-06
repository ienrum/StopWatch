import DateFormatter from "../../functions/DateFormatter";
import styles from "./Graph.module.css";
import { TAGS } from "../../datas/Tags";
import SecondsToMinutes from "../../functions/SecondsToMinutes";
import { colors } from "../../datas/Colors";

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Graph = ({ timeLine, tagOption, weekPeriod }) => {
  const dayOfWeekTotalTime = [0, 0, 0, 0, 0, 0, 0];

  let maxTotalTime = 1;
  let filteredTimeLine = timeLine.filter((time) => time.tag === tagOption);
  if (tagOption === TAGS.ALL) {
    filteredTimeLine = timeLine;
  }

  filteredTimeLine.forEach((time) => {
    const date = new Date(time.startedAt);
    if (date < weekPeriod[0] || date > weekPeriod[1]) return;
    dayOfWeekTotalTime[date.getDay()] += time.duration;
  });

  dayOfWeekTotalTime.forEach((totalTime, index) => {
    maxTotalTime = Math.max(totalTime, maxTotalTime);
  });

  return (
    <div className={styles.container}>
      {dayOfWeekTotalTime.map((totalTime, index) => {
        const day = dayOfWeek[index];
        const height = (totalTime / maxTotalTime) * 100;
        return (
          <div key={index} className={styles["graph"]}>
            <div
              className={styles["totaltime"]}
              style={{
                height: `${height}%`,
                backgroundColor: colors[tagOption],
                opacity: "40%",
              }}
            ></div>
            <div className={styles["graph-element-total-time"]}>
              {SecondsToMinutes(totalTime)}
            </div>
            <div className={styles["day"]}>{day}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
