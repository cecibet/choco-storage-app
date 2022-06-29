import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Components/Context/AuthContext";
import { Navigate } from "react-router-dom";
// import Sell from "../Components/Sell/Sell";
import "./Login.css";

//import Spinner from "../Components/SharedComponents/Spinner/Spinner";
import Logo from "../Components/SharedComponents/Logo/Logo";

export default function LoginForm() {
  const { login, actualUser } = useContext(UserContext);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    login(user, pass);
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

  return (
    <div>
      <Logo />
      <div className="login">
        <div className="login-form">
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
          </form>
        </div>
      </div>
    </div>
  );
}
