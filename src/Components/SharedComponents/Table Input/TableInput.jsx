import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./tableInput.module.css";

const TableInput = ({ rowItem, defaultValue, setData, data, setDataOk }) => {
  const [btnTxt, setBtnTxt] = useState("Modificar");
  const [readOnly, setReadOnly] = useState(true);
  const [warning, setWarning] = useState(false);
  const [inputValue, setDefaultValue] = useState(defaultValue);
  const [showModal, setShowModal] = useState(false);
  const [updRowItem, setUpdRowItem] = useState(rowItem);

  const clickHandler = () => {
    if (warning) {
      setShowModal(true);
    } else {
      setReadOnly(readOnly ? false : true);
      setUpdRowItem({ ...rowItem, cantidad: inputValue });
    }
  };

  const onChangeHandler = (e) => {
    setDefaultValue(e.target.value);
    e.target.value > rowItem.stock ? setWarning(true) : setWarning(false);
  };

  useEffect(() => {
    setData(
      data.map((item) =>
        item.productId === updRowItem.productId ? updRowItem : item
      )
    );
  }, [updRowItem]);

  useEffect(() => {
    setBtnTxt(readOnly ? "Modificar" : "Guardar");
    readOnly ? setDataOk(true) : setDataOk(false);
  }, [readOnly]);

  return (
    <>
      {readOnly ? (
        <p>{inputValue}</p>
      ) : (
        <div>
          <input
            type="number"
            min="1"
            defaultValue={inputValue}
            autoFocus
            readOnly={readOnly}
            onChange={onChangeHandler}
          />
          <p>{warning && "No hay suficiente stock"}</p>
        </div>
      )}
      <Button
        style={styles.btn}
        btnText={btnTxt}
        onClick={clickHandler}
      ></Button>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2>No es posible modificar la cantidad</h2>
        <p>No hay stock disponible</p>
        <Button
          style={styles.btn}
          btnText={"Ok"}
          onClick={() => {
            setShowModal(false);
          }}
        />
      </Modal>
    </>
  );
};
export default TableInput;
