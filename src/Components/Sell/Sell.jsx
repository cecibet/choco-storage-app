import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "../SharedComponents/Dropdown/Dropdown";
import Input from "../SharedComponents/InputBox/InputBox";
import Button from "../SharedComponents/Button/Button";
import SellsTable from "../SharedComponents/Table/Table";
import styles from "./sell.module.css";

const Sell = () => {
  const [sell, setSell] = useState(true);
  const [chocTypeOptions, setChocTypeOptions] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [productInOrder, setProductInOrder] = useState([]);
  // const [currentProduct, setCurrentProduct] = useState({
  //   productType: "",
  //   chocolateType: "",
  //   weight: "",
  // });

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => {
        setDataProducts(res);
        setProductTypes([
          ...new Set(res.map((product) => product.productType)),
        ]);
      });
  }, []);

  // useEffect(() => {
  //   setCurrentProduct({
  //     ...currentProduct,
  //     chocolateType: chocTypeOptions.chocolateType,
  //     weight: chocTypeOptions.weight,
  //   });
  // }, [productInOrder]);

  const handleProductChange = (e) => {
    setChocTypeOptions(
      dataProducts.filter((product) => product.productType === e.target.value)
    );
    // setCurrentProduct({ ...currentProduct, productType: e.target.value });
  };
  const sellHandler = () => {
    setSell(!sell);
  };

  const checkStock = (stock, quantity) => {
    return stock > quantity;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
      alert("Agregue un producto");
    } else {
      const productFound = dataProducts.find(
        (item) =>
          item.productType === e.target[0].value &&
          item.chocolateType === e.target[1].value &&
          item.weight.toString() === e.target[2].value
      );
      productFound &&
      !productInOrder.find((item) => item.productId === productFound.productId)
        ? checkStock(productFound.stock, e.target[3].value)
          ? setProductInOrder([...productInOrder, productFound])
          : alert("Stock insuficiente. Hay " + productFound.stock + " unidades")
        : alert("Ya se cargó el producto");
    }
  };
  return (
    <div className={styles.sellContainer}>
      <form onSubmit={handleSubmit}>
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
        <Input labelText={"Cantidad"}/>
        <Button btnText="Agregar" type="submit" />
      </form>
      <SellsTable products={productInOrder} />
    </div>
  );
};

export default Sell;
