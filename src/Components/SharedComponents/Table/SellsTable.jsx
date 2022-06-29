import tableData from "../../../DB/dataProducts.json";
import styles from "./table.module.css";
const SellsTable = () => {
  const column = Object.keys(tableData.products);

  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };

  const tdData = () => {
    return tableData.products.map((data) => {
      return (
        <tr>
          {column.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <table className={styles.sellTable}>
      <thead>
        <tr>{ThData()}</tr>
      </thead>
      <tbody>{tdData()}</tbody>
    </table>
  );
};
export default SellsTable;
