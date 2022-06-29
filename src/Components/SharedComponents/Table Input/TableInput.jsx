const TableInput = ({
  id,
  warningMsg,
  defaultValue,
  readOnly,
  onClick,
  onChange,
}) => {
  return (
    <>
      <input
        id={id}
        type="number"
        min="1"
        defaultValue={defaultValue}
        readOnly={readOnly}
        onClick={onClick}
        onChange={onChange}
      />
      <p>{warningMsg && "No hay suficiente stock"}</p>
    </>
  );
};
export default TableInput;
