import styles from "./table.module.css";
const SellsTable = ({ headers, data, rowInputs }) => {
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
                  return rowInput==='cantidad'? <input type='number' min='1' defaultValue={row[rowInput]} ></input> : <td key={i}>{row[rowInput]}</td>;
                })}
                <td>
                  <button
                  // type={styles.stylesBtn}
                  // handleClick={() => handleEdit(row._id)}
                  >
                    Edit
                  </button>
                  <button
                  // type={styles.stylesBtn}
                  // handleClick={() => {
                  //   setIsOpen(true);
                  //   setRow(row._id);
                  // }}
                  >
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
