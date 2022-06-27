import React from "react";
import styles from "./inputbox.module.css"

const InputBox = ({ labelText }) => {
  return (
    <div >
      <label className={styles.labelInput}>{labelText}</label>
      <input className={styles.inputContainer}></input>
    </div>
  );
};

export default InputBox;
