import React, { useState, useContext } from "react";
import { UserContext } from "../Components/Context/AuthContext";
import { Navigate } from "react-router-dom";
import "./LoginForm.css";
import Spinner from "../Components/SharedComponents/Spinner/Spinner";

export default function LoginForm() {
  const { login, messageError, isSubmited } = useContext(UserContext);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    login(user, pass);
  };

  const userHandler = (event) => {
    setUser(event.target.value);
  };

  const passHandler = (event) => {
    setPass(event.target.value);
  };

  const render = (
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
      <p className="error">{messageError}</p>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  );

  return (
    <div>
      <div className="login">
        <div className="login-form">{isSubmited ? <Spinner /> : render}</div>
      </div>
    </div>
  );
}
