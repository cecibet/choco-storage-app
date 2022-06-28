import React from "react";
<<<<<<< HEAD
import "./Dropdown.css";
=======
import styles from "./dropdown.module.css";
>>>>>>> master



const Dropdown = ({ options, onChange, label }) => {
  return (
<<<<<<< HEAD
    <div className="custom-select">
      <label>
=======
    <div className={styles.customSelect}>
      <label className={styles.label}>
>>>>>>> master
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
