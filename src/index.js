import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { hydrate, render } from "react-dom";
import "./index.module.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import Statistics from "./Statistics/Statistics";
import ThemeToggle from "./UI/ThemeToggle";

const isDarkData =
  window.localStorage.getItem("isDark") === null
    ? true
    : JSON.parse(window.localStorage.getItem("isDark"));

if (isDarkData) {
  document.documentElement.removeAttribute("data-theme");
} else {
  document.documentElement.setAttribute("data-theme", "dark");
}

const RootFreg = () => {
  const [isApp, setIsApp] = useState(
    window.localStorage.getItem("isApp") === null
      ? true
      : JSON.parse(window.localStorage.getItem("isApp"))
  );
  const [isDark, setIsDark] = useState(
    window.localStorage.getItem("isDark") === null
      ? true
      : JSON.parse(window.localStorage.getItem("isDark"))
  );

  useEffect(() => {
    window.localStorage.setItem("isApp", JSON.stringify(isApp));
    window.localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isApp, isDark]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [isDark]);
  const onClick = () => {
    setIsApp((prevState) => !prevState);
  };

  return (
    <>
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      {isApp ? <App onClick={onClick} /> : <Statistics onClick={onClick} />}
    </>
  );
};
const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(<RootFreg />, root);
} else {
  render(<RootFreg />, root);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
