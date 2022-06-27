import React from "react";
import "./Dropdown.css";



const Dropdown = ({ options, onChange, label }) => {
  return (
    <div className="custom-select">
      <label>
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
