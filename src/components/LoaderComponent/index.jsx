import React from "react";
import styles from "./LoaderComponent.module.css";

const LoaderComponent = ({ text = "Идёт загрузка..." }) => {
  return (
    <div className={styles.loader__root}>
      <img
        className={styles.loader__icon}
        src="/img/keengram.svg"
        alt="loader"
      />
      <p className={styles.loader__text}>{text}</p>
    </div>
  );
};

export default LoaderComponent;
