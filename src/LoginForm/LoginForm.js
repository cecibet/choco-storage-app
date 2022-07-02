import React, { useState, useContext } from "react";
import { UserContext } from "../Components/Context/AuthContext";
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
    <div className="login-form">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label>Usuario </label>
          <input
            className="inputBox"
            autoFocus
            type="text"
            name="Usuario"
            value={user}
            onChange={userHandler}
            
          />
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input
            className="inputBox"
            type="password"
            name="pass"
            value={pass}
            onChange={passHandler}
            
          />
        </div>
        <p className="error">{messageError}</p>
        <div className="button-container">
          <input type="submit" value="Ingresar" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className="login">{isSubmited ? <Spinner /> : render}</div>
    </div>
  );
}
