// import styles from "./button.module.css";

const Button = ({ btnText, onClick, onSubmit, type, style }) => {
  return (
    <button
      className={style}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {btnText}
    </button>
  );
};
export default Button;
