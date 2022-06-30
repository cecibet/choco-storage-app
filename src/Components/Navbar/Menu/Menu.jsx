import React from "react";
import styles from "./menu.module.css";
import Button from "../../SharedComponents/Button/Button";
import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";

const Menu = ({ sell, sellHandler }) => {

  const {place} = useContext(UserContext)


    return (
      <div className={styles.menu}>
        {place && <Button btnText={"Cargar compra"} />}
        {place && <Button btnText={"Venta"} onClick={sellHandler} />}
        {place && <Button btnText={"Ver Stock"} />}
      </div>
    );
};

export default Menu;
