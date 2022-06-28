import React from "react";
import styles from "./dropdown.module.css";



const Dropdown = ({ options, onChange, label }) => {
  return (
    <div className={styles.customSelect}>
      <label className={styles.label}>
        {label}
        <select onChange={onChange}>
          <option disabled selected>
            --Seleccione--
          </option>
          {options &&
            options.map((option, i) => <option key={i}>{option}</option>)}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
