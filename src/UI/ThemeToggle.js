import { useState } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = ({ isDark, setIsDark }) => {
  const onClick = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ThemeToggle;
