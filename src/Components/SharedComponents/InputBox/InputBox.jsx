import React from "react";
import styles from "./inputbox.module.css"

const InputBox = ({ labelText }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.labelInput}>{labelText}</label>
      <input className={styles.inputContainer} type="number" min="1"></input>
    </div>
  );
};

export default InputBox;
