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
        const height = (totalTime / maxTotalTime) * 100 * 0.65;
        return (
          <div key={index} className={styles["graph"]}>
            <div
              className={styles["totaltime"]}
              style={{
                width: `${height}%`,
                backgroundColor: colors[tagOption],
                border: `3px solid var(--accent-color)`,
                opacity: "70%",
              }}
            ></div>
            <div className={styles["day"]}>
              {day}
              <div className={styles["graph-element-total-time"]}>
                {SecondsToMinutes(totalTime)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
