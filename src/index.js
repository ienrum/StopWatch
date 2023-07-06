import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import Statistics from "./Statistics/Statistics";

const RootFreg = () => {
  const [isApp, setIsApp] = useState(true);

  const onClick = () => {
    setIsApp((prevState) => !prevState);
  };
  return (
    <>{isApp ? <App onClick={onClick} /> : <Statistics onClick={onClick} />}</>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootFreg />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
