import React from "react";
import { useContext} from "react";
import { UserContext } from "../Context/AuthContext";
import SellsTable from "../SharedComponents/Table/SellsTable";
import styles from "./checkStock.module.css";


const CheckStock = () => {
    const { products } = useContext(UserContext);
  
  return (
    <div className={styles.tableContainer}>
      <SellsTable
        data={products}
        headers={[
          "ID",
          "Tipo de Producto",
          "Tipo de Chocolate",
          "Peso",
          "Precio unitario",
          "Stock",
        ]}
        rowInputs={[
          "productId",
          "productType",
          "chocolateType",
          "weight",
          "unitPrice",
          "stock",
        ]}
      />
    </div>
  );
};

export default CheckStock;
