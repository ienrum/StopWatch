import React, { useState } from "react";

import { defaultTimeLine } from "../datas/List";
import { TAGS } from "../datas/Tags";

import styles from "./Statistics.module.css";

import Card from "./components/UI/Card";
import Graph from "./components/Graph";
import TagOptions from "./components/TagOptions";
import WeekOption from "./components/WeekOption";

const Statistics = (props) => {
  const weekPeriodDate = (today) => {
    const first = today.getDate() - today.getDay();
    const firstDay = new Date(today.setDate(first));
    const lastDay = new Date(today.setDate(first + 6));
    return [firstDay, lastDay];
  };

  const [weekPeriod, setWeekPeriod] = useState(weekPeriodDate(new Date()));

  const [timeLine, setTimeLine] = useState(
    window.localStorage.getItem("timeLine") === null
      ? defaultTimeLine
      : JSON.parse(window.localStorage.getItem("timeLine"))
  );
  const [tagOption, setTagOption] = useState(TAGS.ALL);

  return (
    <div className={styles.Statistics}>
      <h1 className={styles.title}>Statistics</h1>
      <Card className={styles["container"]}>
        <WeekOption
          weekPeriod={weekPeriod}
          onSetWeekPeriod={setWeekPeriod}
          weekPeriodDate={weekPeriodDate}
        />
        <TagOptions onSetTagOption={setTagOption} />
        <Graph
          timeLine={timeLine}
          tagOption={tagOption}
          weekPeriod={weekPeriod}
        />
      </Card>
    </div>
  );
};

export default Statistics;
