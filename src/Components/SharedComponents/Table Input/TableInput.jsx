import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const TableInput = ({ rowItem, defaultValue }) => {
  const [btnTxt, setBtnTxt] = useState("Modificar");
  const [readOnly, setReadOnly] = useState(true);
  const [warning, setWarning] = useState(false);
  const [inputValue, setDefaultValue] = useState(defaultValue);
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    if (warning) {
      setShowModal(true);
    } else {
      setReadOnly(readOnly ? false : true);
    }
  };

  const onChangeHandler = (e) => {
    setDefaultValue(e.target.value);
    e.target.value > rowItem.stock ? setWarning(true) : setWarning(false);
  };

  useEffect(() => {
    setBtnTxt(readOnly ? "Modificar" : "Guardar");
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
      <Button btnText={btnTxt} onClick={clickHandler}></Button>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2>No es posible modificar la cantidad!</h2>
        <p>No hay stock disponible</p>
        <Button
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
