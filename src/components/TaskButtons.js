import React from "react";
import "./TaskButtons.css";

const TaskButtons = ({
  sell,
  easterEgg,
  chocBar,
  chocFlake,
  easterEggHandler,
  chocFlakeHandler,
  chocBarHandler,
  chocType,
  chocTypeHandler,
  sellHandler,
}) => {
  return (
    <div className="TaskButtons">
      <button onClick={sellHandler}>Venta</button>
      <button>Cargar compra</button>
      <button>Ver stock</button>
      <br></br>
      {sell && <button className="ProductType" onClick={chocFlakeHandler}>Chocolate en rama</button>}
      {sell && <button className="ProductType" onClick={chocBarHandler}>Chocolate en barra</button>}
      {sell && <button className="ProductType" onClick={easterEggHandler}>Huevo de pascua</button>}
      <br></br>
      {sell && easterEgg && <button className="chocType" onClick={chocTypeHandler}>Blanco</button>}
      {sell && easterEgg && <button className="chocType" onClick={chocTypeHandler}>Negro</button>}
      {sell && chocBar && <button className="chocType" onClick={chocTypeHandler}>Leche</button>}
      {sell && chocBar && <button className="chocType" onClick={chocTypeHandler}>Maní</button>}
      {sell && chocBar && <button className="chocType" onClick={chocTypeHandler}>Amargo</button>}
      {sell && chocFlake && <button className="chocType" onClick={chocTypeHandler}>Negro</button>}
      {sell && chocFlake && <button className="chocType" onClick={chocTypeHandler}>Blanco</button>}
      <br></br>
      {sell && (easterEgg || chocFlake) && chocType && (
        <button className="ProductWeight">70g</button>
      )}
      {sell && (easterEgg || chocFlake) && chocType && (
        <button className="ProductWeight">110g</button>
      )}
      {sell && (easterEgg || chocFlake) && chocType && (
        <button className="ProductWeight">300g</button>
      )}
      {sell && (chocBar) && chocType && (
        <button className="ProductWeight">70g</button>
      )}
      {sell && (chocBar) && chocType && (
        <button className="ProductWeight">120g</button>
      )}
      {sell && (chocBar) && chocType && (
        <button className="ProductWeight">180g</button>
      )}
      {sell && (chocBar) && chocType && (
        <button className="ProductWeight">300g</button>
      )}
    </div>
  );
};

export default TaskButtons;
