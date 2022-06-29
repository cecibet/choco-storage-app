import React, { useState } from "react";
import { useAuth, LoginUser } from "../Components/Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import "./Login.css";

import Spinner from "../Components/SharedComponents/Spinner/Spinner";
import Logo from "../Components/SharedComponents/Logo/Logo";

const Login = () => {

  const auth = useAuth();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    LoginUser(user, pass);
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
            <p className="error">{auth.loginerror}</p> 
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
        
        {auth.waitingLogin === true && <Spinner />}
        {auth.waitingLogin === false && <Navigate to="/Sell" />}
      </div>
    </div>
  );
};
export default Login;