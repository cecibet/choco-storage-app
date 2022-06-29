import styles from "./table.module.css";
import { useState, useEffect } from "react";
import TableInput from "../Table Input/TableInput";

const SellsTable = ({ headers, data, rowInputs, setData }) => {
  const [readOnly, setReadOnly] = useState({});
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [warning, setWarning] = useState(false);
  const [currentRow, setCurrentRow] = useState("");

  const handleClick = (e) => {
    console.log("current id", e.target.id);
    setCurrentRow(e.target.id);
    if (readOnly[e.target.id]) {
      if (readOnly[e.target.id] === true) {
        setReadOnly({ ...readOnly, [e.target.id]: false });
      } else {
        setReadOnly({ ...readOnly, [e.target.id]: true });
      }
    } else {
      setReadOnly({ ...readOnly, [e.target.id]: true });
    }
    console.log("readOnly", readOnly);
    // readOnly ? setReadOnly(false) : setReadOnly(true);
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
      <table className={styles.SellsTable}>
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
                      <TableInput
                        id={index}
                        warningMsg={warning}
                        defaultValue={row[rowInput]}
                        readOnly={readOnly}
                        onClick={() => {
                          setCurrentItem(row);
                        }}
                        onChange={handleChange}
                      />
                      <button id={index} onClick={handleClick}>
                        {currentRow === index.toString() && readOnly[currentRow]
                          ? "Modificar"
                          : "Ok"}
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
