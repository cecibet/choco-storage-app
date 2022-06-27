import styles from "./button.module.css";

const Button = (btnText) => {
  return <button className={styles.btn}>{btnText}</button>;
};
export default Button;
