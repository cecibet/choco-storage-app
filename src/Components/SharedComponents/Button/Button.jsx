import styles from "./button.module.css";

const Button = ({ btnText, onClick, onSubmit, type }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {btnText}
    </button>
  );
};
export default Button;
