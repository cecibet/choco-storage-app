import React from "react";
import "./TaskButtons.css";

const TaskButtons = ({ sell, sellHandler }) => {
  return (
    <div className="TaskButtons">
      <button>Cargar compra</button>
      <button onClick={sellHandler}>Venta</button>
      <button>Ver stock</button>
      <br></br>
      <br></br>
    </div>
  );
};

export default TaskButtons;
