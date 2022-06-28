import Button from "../SharedComponents/Button/Button";
import Logo from "../SharedComponents/Logo/Logo";
import styles from "../Header/header.module.css"

const Header = () => {
  return (
    <div className={styles.hdrContainer}>
      <Logo />
      <Button btnText="Login" />
    </div>
  );
};

export default Header;
