import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const navigate = useNavigate();

  const [actualUser, setActualUser] = useState({});
  const [users, setUsers] = useState({});
  const [products, setProducts] = useState([]);
  const [messageError, setMessageError] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  const login = (user, pass) => {
    const _user = users.filter(
      (us) => us.username === user && us.password === pass
    );
    setActualUser(_user);
    if (_user.length <= 0) {
      setTimeout(() => {
        setMessageError("");
      }, 2000);
      setMessageError("usuario o contraseña invalida");
    }
    if (_user.length > 0) {
      setIsSubmited(true);
    }
  };

  const logout = () => {
    setIsSubmited(false);
    setPlace(null);
    navigate("/Login", { replace: true });
  };

  if (
    document.location.pathname !== "/Login" &&
    document.location.pathname !== "/" &&
    document.location.pathname !== "*" &&
    place !== true
  ) {
    setPlace(true);
  }

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        place,
        actualUser,
        messageError,
        isSubmited,
        products,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
