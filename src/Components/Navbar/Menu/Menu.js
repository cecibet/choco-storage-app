import React from "react";
import "./Menu.css";

const Menu = ({ sell, sellHandler }) => {
  return (
    <div className="Menu">
      <button>Cargar compra</button>
      <button onClick={sellHandler}>Venta</button>
      <button>Ver stock</button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Menu;
