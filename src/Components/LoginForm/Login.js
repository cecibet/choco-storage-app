import React, { useState } from "react";
import { useAuth, useAuthDispatch } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

import "./Login.css";

// import UsersDB from "../../../DB/UsersDB";
import Spinner from "../SharedComponents/Spinner/Spinner";
import Logo from "../SharedComponents/Logo/Logo";


const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useAuthDispatch();
  const auth = useAuth();

  // const [errorMessage, setErrorMessage] = useState(""); //quizas no lo use e use el msje que tira en authcontextprovider
  // const [isSubmitted, setIsSubmitted] = useState(false);

  //instanciamos la "base de datos" KJJJJ
  // const users = UsersDB();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch.login(user, pass); // originalmente --> dispatch.login(email, password);

    /*   const currentUser = users.filter(
      (us) => us.username === user && us.password === pass
    );
    if (currentUser.length) {
      setIsSubmitted(true);
    } else {
      setErrorMessage("Usuario o contraseña invalida.");
    } 
    */
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
            <p className="error">{/*errorMessage*/}</p>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
        
        {auth.waitingLogin === true && <Spinner />}
        {auth.waitingLogin === false && <Navigate to="/App" />}
      </div>
    </div>
  );
};

export default Login;