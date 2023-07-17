import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { hydrate, render } from "react-dom";
import "./index.module.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import Statistics from "./Statistics/Statistics";
import ThemeToggle from "./UI/ThemeToggle";
function isBrowser() {
  return typeof window !== "undefined";
}
function getSafeLocalStorage(key, initialValue) {
  // 브라우저인지 확인
  if (!isBrowser()) return initialValue;

  const storedValue = window.localStorage.getItem(key);
  if (storedValue === null) return initialValue;

  return JSON.parse(storedValue);
}

const isDarkData = getSafeLocalStorage("isDark", true);

if (isDarkData) {
  document.documentElement.removeAttribute("data-theme");
} else {
  document.documentElement.setAttribute("data-theme", "dark");
}

const RootFreg = () => {
  const [isApp, setIsApp] = useState(getSafeLocalStorage("isApp", true));
  const [isDark, setIsDark] = useState(getSafeLocalStorage("isDark", true));

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
