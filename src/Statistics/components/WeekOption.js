import styles from "./WeekOption.module.css";
import DateFormatter from "../../functions/DateFormatter";

const WeekOption = ({ weekPeriod, onSetWeekPeriod, weekPeriodDate }) => {
  const previousWeekHandler = () => {
    const firstDay = new Date(weekPeriod[0]);
    const lastDay = new Date(weekPeriod[1]);
    firstDay.setDate(firstDay.getDate() - 7);
    lastDay.setDate(lastDay.getDate() - 7);
    onSetWeekPeriod([firstDay, lastDay]);
  };

  const nextWeekHandler = () => {
    const firstDay = new Date(weekPeriod[0]);
    const lastDay = new Date(weekPeriod[1]);
    firstDay.setDate(firstDay.getDate() + 7);
    lastDay.setDate(lastDay.getDate() + 7);
    onSetWeekPeriod([firstDay, lastDay]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={previousWeekHandler}>
        previous week
      </button>
      <div className={styles.week}>
        {DateFormatter(weekPeriod[0], `y/m/d`) +
          " ~ " +
          DateFormatter(weekPeriod[1], "m/d")}
      </div>
      <button className={styles.button} onClick={nextWeekHandler}>
        next week
      </button>
    </div>
  );
};

export default WeekOption;
