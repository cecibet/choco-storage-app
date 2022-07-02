// import styles from "./button.module.css";

const Button = ({ btnText, onClick, onSubmit, type, style, value }) => {
  return (
    <button
      className={style}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      value={value}
    >
      {btnText}
    </button>
  );
};
export default Button;
