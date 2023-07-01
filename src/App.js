import "./App.css";
import StopWatch from "./components/StopWatch";
import TimeLine from "./components/TimeLine";
import TagOptions from "./components/TagOptions";
import { useState, useEffect } from "react";
import { TAGS } from "./datas/Tags";
import { defaultTimeLine } from "./datas/List";
import Card from "./components/Card";

function App() {
  const [timeLine, setTimeLine] = useState(
    window.localStorage.getItem("timeLine") === null
      ? defaultTimeLine
      : JSON.parse(window.localStorage.getItem("timeLine"))
  );
  const [tagOption, setTagOption] = useState(TAGS.ALL);

  useEffect(() => {
    window.localStorage.setItem("timeLine", JSON.stringify(timeLine));
  }, [timeLine]);

  return (
    <div className="App">
      <h1>Stop Watch Timer</h1>
      <StopWatch onSetTimeLine={setTimeLine} tag={tagOption} />
      <Card className="notHover">
        <TagOptions onSetTagOption={setTagOption} />
        <TimeLine
          onSetTimeLine={setTimeLine}
          timeLine={timeLine}
          tagOption={tagOption}
        />
      </Card>
    </div>
  );
}

export default App;
