import { useEffect, useState } from "react";
import Dropdown from "../SharedComponents/Dropdown/Dropdown";
import Input from "../SharedComponents/InputBox/InputBox";
import Button from "../SharedComponents/Button/Button";
import SellsTable from "../SharedComponents/Table/SellsTable";
import styles from "./sell.module.css";
import Modal from "../SharedComponents/Modal/Modal";

const Sell = () => {
  const [chocTypeOptions, setChocTypeOptions] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [productInOrder, setProductInOrder] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalTxt, setModalTxt] = useState("");
  const [regSell, setRegSell] = useState(false);
  const [dataOk, setDataOk] = useState(true);

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

  const handleProductChange = (e) => {
    setChocTypeOptions(
      dataProducts.filter((product) => product.productType === e.target.value)
    );
  };

  const checkStock = (stock, quantity) => {
    return stock >= quantity;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target[0].value ||
      !e.target[1].value ||
      !e.target[2].value ||
      !e.target[3].value
    ) {
      setShowModal(true);
      setModalTitle("Atención");
      setModalTxt("Complete todos los campos.");
    } else {
      const productFound = dataProducts.find(
        (item) =>
          item.productType === e.target[0].value &&
          item.chocolateType === e.target[1].value &&
          item.weight.toString() === e.target[2].value
      );
      productFound["cantidad"] = e.target[3].value;
      if (
        productFound &&
        !productInOrder.find(
          (item) => item.productId === productFound.productId
        )
      ) {
        if (checkStock(productFound.stock, e.target[3].value)) {
          setProductInOrder([...productInOrder, productFound]);
        } else {
          setShowModal(true);
          setModalTitle("Atención");
          setModalTxt(
            `Stock insuficiente. Quedan ${productFound.stock} unidades`
          );
        }
      } else {
        setShowModal(true);
        setModalTitle("Atención");
        setModalTxt("El producto ya fue cargado.");
      }
    }
  };

  const sendSellHandler = () => {
    console.log(productInOrder);
    if (dataOk) {
      setRegSell(true);
      setShowModal(true);
      setModalTitle("Atención");
      setModalTxt("¿Seguro de que quiere registrar la venta?");
    } else {
      setRegSell(false);
      setShowModal(true);
      setModalTitle("Atención");
      setModalTxt("Aún no terminó de editar las cantidades.");
    }
  };

  const createSell = () => {
    regSell(false);
    
    const result = dataProducts.map((product) => {
      const orderItem = productInOrder.find(
        (prod) => prod.productId === product.productId
      );
      product.stock = orderItem
        ? (product.stock = product.stock - orderItem.cantidad)
        : product.stock;

      fetch("http://localhost:3000/products", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });
    });
  };

  return (
    <div className={styles.sellContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.sellOptions}>
          {" "}
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
            options={[
              ...new Set(chocTypeOptions.map((option) => option.weight)),
            ]}
          />
          <Input labelText={"Cantidad"} min="1" />
        </div>
        <Button style={styles.btn} btnText="Agregar" type="submit" />
      </form>
      {productInOrder.length > 0 && (
        <>
          <SellsTable
            data={productInOrder}
            headers={[
              "ID",
              "Tipo de Producto",
              "Tipo de Chocolate",
              "Peso",
              "Precio unitario",
              "Cantidad",
            ]}
            rowInputs={[
              "productId",
              "productType",
              "chocolateType",
              "weight",
              "unitPrice",
              "cantidad",
            ]}
            setData={setProductInOrder}
            setDataOk={setDataOk}
            inSell={true}
          />
          <Button
            onClick={sendSellHandler}
            style={styles.btn}
            btnText="Registrar venta"
          />
        </>
      )}
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2>{modalTitle}</h2>
        <p>{modalTxt}</p>
        <Button
          style={styles.btn}
          btnText={"Ok"}
          onClick={() => {
            if (regSell) {
              createSell();
            } else {
              setShowModal(false);
              setRegSell(false);
            }
          }}
        />
        {regSell && (
          <Button
            style={styles.btn}
            btnText={"Cancel"}
            onClick={() => {
              setShowModal(false);
              setRegSell(false);
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default Sell;
