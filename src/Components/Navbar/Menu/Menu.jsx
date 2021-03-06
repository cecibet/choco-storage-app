import React from "react";
import styles from "./menu.module.css";
import Button from "../../SharedComponents/Button/Button";
import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { place } = useContext(UserContext);
  const [sell, setSell] = useState(true);
  const [checkStock, setCheckStock] = useState(true);

  const navigate = useNavigate();

  const checkStockHandler = () => {
   setCheckStock(!checkStock);
    if (!checkStock) {
      navigate("/Home", { replace: true });
    } else {
      navigate("/CheckStock", { replace: true });
    }
  };

  const sellHandler = () => {
    setSell(!sell);
    if (!sell) {
      navigate("/Home", { replace: true });
    } else {
      navigate("/Sell", { replace: true });
    }
  };

  return (
    <div className={styles.menu}>
      {place && <Button style={styles.btn} btnText={"Cargar compra"} />}
      {place && (
        <Button style={styles.btn} btnText={"Venta"} onClick={sellHandler} />
      )}
      {place && (
        <Button
          style={styles.btn}
          btnText={"Ver Stock"}
          onClick={checkStockHandler}
        />
      )}
    </div>
  );
};

export default Menu;
