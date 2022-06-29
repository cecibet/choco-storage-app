import Button from "../SharedComponents/Button/Button";
import Logo from "../SharedComponents/Logo/Logo";
import { UserContext } from "../../Components/Context/AuthContext";
import styles from "../Header/header.module.css"
import { useContext } from "react";

const Header = () => {
  const {logout} = useContext(UserContext)
  return (
    <div className={styles.hdrContainer}>
      <Logo />
      <Button btnText="Logout" onClick={logout}/>
    </div>
  );
};

export default Header;
