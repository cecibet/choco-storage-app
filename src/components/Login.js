import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>Email  </label>

        <input
          autoFocus
          type="email"
          value={email}
          onChange={handleEmail}
        ></input>
        <br></br>
        <label>Contraseña  </label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <br></br>

        <button type="submit" disabled={!validateForm()}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;