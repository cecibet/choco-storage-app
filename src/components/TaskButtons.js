import React from "react";
import "./TaskButtons.css";

const TaskButtons = ({
  children,
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
      <br></br>
      {sell && <button onClick={easterEggHandler}>Huevo de pascua</button>}
      {sell && <button onClick={chocFlakeHandler}>Chocolate en rama</button>}
      {sell && <button onClick={chocBarHandler}>Chocolate en barra</button>}
      <br></br>
      {sell && easterEgg && <button onClick={chocTypeHandler}>Blanco</button>}
      {sell && easterEgg && <button onClick={chocTypeHandler}>Negro</button>}
      {sell && chocBar && <button onClick={chocTypeHandler}>Leche</button>}
      {sell && chocBar && <button onClick={chocTypeHandler}>Maní</button>}
      {sell && chocBar && <button onClick={chocTypeHandler}>Amargo</button>}
      {sell && chocFlake && <button onClick={chocTypeHandler}>Negro</button>}
      {sell && chocFlake && <button onClick={chocTypeHandler}>Blanco</button>}
      <br></br>
      {sell && (easterEgg || chocFlake || chocBar) && chocType && (
        <button>70g</button>
      )}
      {sell && (easterEgg || chocFlake || chocBar) && chocType && (
        <button>110g</button>
      )}
      {sell && (easterEgg || chocFlake || chocBar) && chocType && (
        <button>300g</button>
      )}
    </div>
  );
};

export default TaskButtons;
