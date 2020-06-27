import React from "react";
import styles from "./StyledText.module.css";

export const StyledText = (props) => {
  return <div className={styles.textStyle}>{props.children}</div>;
};
