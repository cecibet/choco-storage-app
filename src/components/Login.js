import React, { useState } from "react";
import UsersDB from "../DB/UsersDB";

import "./Login.css";
import Spinner from "./Spinner";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [SAdmin, setSAdmin] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  //instanciamos la "base de datos"
  const users = UsersDB();

  const submitHandler = (event) => {
    event.preventDefault();

    const currentUser = users.filter(
      (us) => us.username === user && us.password === pass
    );

    if (currentUser.length) {
      setIsSubmitted(true);
      setSAdmin(currentUser[0].superAdmin);
      alert("entraste crack");
      // poner SPINNER
      // Routear a home
    } else {
      setErrorMessage("Usuario o contraseña invalida.");
    }
  };

  const userHandler = (event) => {
    setUser(event.target.value);
  };

  const passHandler = (event) => {
    setPass(event.target.value);
  };

  const renderForm = () => {
    return (
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
    );
  };
  return (<div>{isSubmitted ? <Spinner /> : renderForm()}</div>);
};

export default Login;
