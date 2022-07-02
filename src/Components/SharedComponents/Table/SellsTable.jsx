import styles from "./table.module.css";
import TableInput from "../Table Input/TableInput";
import Button from "../Button/Button";

const SellsTable = ({ headers, data, rowInputs, setData, setDataOk }) => {
  const handleDelete = (e) => {
    const filteredData = data.filter(
      (item) => item.productId.toString() !== e.target.value
    );
    setData(filteredData);
  };
  return (
    <div className={styles.tableWrapper}>
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
                    <TableInput
                      data={data}
                      setData={setData}
                      rowItem={row}
                      defaultValue={row[rowInput]}
                      setDataOk ={setDataOk}
                    />
                  ) : (
                    <td key={i}>{row[rowInput]}</td>
                  );
                })}
                <td>
                  <Button btnText={"Borrar"} style={styles.btn} value={row.productId} onClick={handleDelete}>
        
                  </Button>
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
