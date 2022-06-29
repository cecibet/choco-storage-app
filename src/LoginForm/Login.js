import React, { useState, useEffect } from "react";
import { useAuth } from "../Components/Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import Sell from "../Components/Sell/Sell";
import "./Login.css";

import Spinner from "../Components/SharedComponents/Spinner/Spinner";
import Logo from "../Components/SharedComponents/Logo/Logo";

export default function Login()  {
  const auth = useAuth();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState({});
  const [isSubmitted, setIsSubmited] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    LoginUser(user, pass);
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  const userHandler = (event) => {
    setUser(event.target.value);
  };

  const passHandler = (event) => {
    setPass(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  const LoginUser = (user, pass) => {
    const currentUser = users.filter(
      (us) => us.username === user && us.password === pass
    );
    console.log(currentUser);
    if (currentUser.length) {
      setIsSubmited(true);
    } else {
      setErrorMessage("Usuario o contraseña invalida");
      setIsSubmited(false);
    }
  };

   function Logout(){
    setUsers({});
    setIsSubmited(false);
  };

  const renderForm = (
    <form onSubmit={submitHandler}>
      <div className="input-container">
        <label>Usuario </label>
        <input
          autoFocus
          type="text"
          name="Usuario"
          value={user}
          onChange={userHandler}
          required
        />
      </div>
      <div className="input-container">
        <label>Contraseña </label>
        <input
          type="password"
          name="pass"
          value={pass}
          onChange={passHandler}
          required
        />
      </div>
      <p className="error">{errorMessage}</p>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>);

  return (
    <div>
      <Logo />
      <div className="login">
        <div className="login-form">
          {isSubmitted? <Navigate to="/Sell"/>: renderForm}
        </div>
      </div>
    </div>
  );
};
