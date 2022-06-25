import React, { useState } from "react";
import UsersDB from "../../../DB/UsersDB";

import "./Login.css";
import Spinner from "../../SharedComponents/Spinner/Spinner";
import Logo from "../../SharedComponents/Logo/Logo";
import { Navigate } from "react-router-dom";

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
      <div>
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
    );
  };
  return (
    <div>
      {<Logo />}
      <div className="login">
        <div className="login-form">
          <div>{isSubmitted ? <Spinner />  && <Navigate  to="/App" />: renderForm()}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
