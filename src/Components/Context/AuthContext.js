import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export default function UserProvider({ children }) {

  const navigate = useNavigate();

  const [actualUser, setActualUser] = useState({});
  const [users, setUsers] = useState({});
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


  const login = (user, pass) => {
    const _user = users.filter((us) => us.username === user && us.password === pass)
    setActualUser(_user);
    if (!_user) {
      setTimeout(() => {setMessageError("")}, 2000);
      setMessageError("usuario o contraseña invalida")
    }
    if (_user) {
      setIsSubmited(true);
    } 
  };

  const logout = () => {
    setUsers({});
    setIsSubmited(false);
    setPlace(null);
    navigate("/Login", { replace: true });
  };


  if(document.location.pathname !== "/Login" 
  && document.location.pathname !== "/" 
  && document.location.pathname !== "*"
  && place !== true){
    setPlace(true)
  };


  return (
    <UserContext.Provider
      value={{ login, logout, place, actualUser, messageError, isSubmited }}>
      {children}
    </UserContext.Provider>
  );
};
