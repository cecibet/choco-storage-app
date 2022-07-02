import Button from "../SharedComponents/Button/Button";
import Logo from "../SharedComponents/Logo/Logo";
import { UserContext } from "../../Components/Context/AuthContext";
import styles from "../Header/header.module.css";
import { useContext } from "react";

const Header = () => {
  const { logout, place, currentUser } = useContext(UserContext);

  return (
    <div className={styles.hdrContainer}>
      <Logo />
      {currentUser && <p>{currentUser.name}</p>}
      {place && <Button style={styles.btn} btnText="Salir" onClick={logout} />}
    </div>
  );
};

export default Header;
