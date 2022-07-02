import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";
import SellsTable from "../SharedComponents/Table/SellsTable";
import styles from "./checkStock.module.css";

const CheckStock = () => {
  const { products } = useContext(UserContext);
  var orderByLowest = products.slice(0);
  orderByLowest.sort(function (a, b) {
    return a.stock - b.stock;
  });

  console.log(orderByLowest);

  return (
    <div className={styles.tableContainer}>
      <SellsTable
        data={orderByLowest}
        headers={[
          "ID",
          "Tipo de Producto",
          "Tipo de Chocolate",
          "Peso",
          "Stock",
        ]}
        rowInputs={[
          "productId",
          "productType",
          "chocolateType",
          "weight",
          "stock",
        ]}
        inSell={false}
      />
    </div>
  );
};

export default CheckStock;
