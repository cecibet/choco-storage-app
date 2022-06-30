import styles from "./table.module.css";
import { useState } from "react";

const SellsTable = ({ headers, data, rowInputs, setData }) => {
  const [readOnly, setReadOnly] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [warning, setWarning] = useState(false);

  const handleClick = () => {
    readOnly ? setReadOnly(false) : setReadOnly(true);
  };

  const handleDelete = (e) => {
    const filteredData = data.filter(
      (item) => item.productId.toString() !== e.target.value
    );
    setData(filteredData);
  };

  const handleChange = (e) => {
    console.log("event onchange", e.target.value);
    console.log("current item", currentItem.stock);
    e.target.value > currentItem.stock ? setWarning(true) : setWarning(true);
  };
  return (
    <div>
      <table className={styles.sellTable}>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {rowInputs.map((rowInput, i) => {
                  return rowInput === "cantidad" ? (
                    <>
                      <input
                        className={styles.quantityInput}
                        type="number"
                        min="1"
                        defaultValue={row[rowInput]}
                        readOnly={readOnly}
                        onClick={() => {
                          setCurrentItem(row);
                        }}
                        onChange={handleChange}
                      ></input>
                      {warning && <p>Stock insuficiente</p>}
                      <button onClick={handleClick}>
                        {readOnly ? "Modificar" : "Ok"}
                      </button>
                    </>
                  ) : (
                    <td key={i}>{row[rowInput]}</td>
                  );
                })}
                <td>
                  <button value={row.productId} onClick={handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SellsTable;
