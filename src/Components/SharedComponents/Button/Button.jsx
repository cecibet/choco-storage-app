import styles from "./button.module.css";

const Button = ({ btnText, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {btnText}
    </button>
  );
};
export default Button;
