import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "../SharedComponents/Dropdown/Dropdown";
import Input from "../SharedComponents/InputBox/InputBox";
import styles from "./sell.module.css";

const Sell = () => {
  const [sell, setSell] = useState(true);
  const [chocTypeOptions, setChocTypeOptions] = useState([]);
  const [dataProducts, setDataProducts] = useState({});
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => {
        setDataProducts(res);
        setProductTypes([...new Set(res.map((product) => product.productType))]);
      });
  }, []);


  const handleProductChange = (e) => {
    setChocTypeOptions(
      dataProducts.filter((product) => product.productType === e.target.value)
    );
  };

  const sellHandler = () => {
    setSell(!sell);
  };

  return (
    <div className={styles.sellContainer}>
      <Dropdown
        label={"Tipo de producto"}
        options={productTypes}
        onChange={handleProductChange}
      />
      <Dropdown
        label={"Tipo de chocolate"}
        options={[
          ...new Set(chocTypeOptions.map((option) => option.chocolateType)),
        ]}
      />

      <Dropdown
        label={"Peso"}
        options={[...new Set(chocTypeOptions.map((option) => option.weight))]}
      />
      <Input labelText={"Cantidad"} type="number" min="1" />
    </div>
  );
};

export default Sell;
