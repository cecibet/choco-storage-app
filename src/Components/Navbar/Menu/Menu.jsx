import React from "react";
import styles from "./menu.module.css";
import Button from "../../SharedComponents/Button/Button";

const Menu = ({ sell, sellHandler }) => {
  return (
    <div className={styles.menu}>
      <Button btnText={"Cargar compra"} />
      <Button btnText={"Venta"} onClick={sellHandler} />
      <Button btnText={"Ver Stock"} />
    </div>
  );
};

export default Menu;
