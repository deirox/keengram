import React from "react";
import cn from "classnames";

import styles from "./StyleziedButton.module.css";

const StyleziedButton = ({
  classname = "",
  primary = false,
  onClick = () => {
    return null;
  },
  children = "",
  disabled = false,
  type = "",
}) => {
  return (
    <button
      className={cn(
        styles.styleziedButton,
        primary && styles.styleziedButton___primary,
        classname
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default StyleziedButton;
