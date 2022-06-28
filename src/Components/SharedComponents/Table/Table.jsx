import styles from "./table.module.css";
const SellsTable = ({ products }) => {
  if (products.length) {
    const column = Object.keys(products[0]);
    const ThData = () => {
      return column.map((data) => {
        return <th key={data.productId}>{data}</th>;
      });
    };

    const tdData = () => {
      return products.map((data) => {
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
  }
};
export default SellsTable;
