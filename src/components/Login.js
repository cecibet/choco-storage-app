import React, { useState } from "react";

import "./Login.css";

const Login = () => 
{
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // DB Usuarios Harcode                                                  ??
  const users = [
    {
      username: "vendedor",
      password: "vendedorpass",
      superAdmin: false
    },
    {
      username: "supervisor",
      password: "supervisorpass",
      superAdmin: true
    }
  ];
 

  const submitHandler = (event) => {
    event.preventDefault();

    const boolUser = users.filter((us) => (us.username === user)).length;
    const boolPass = users.filter((us) => (us.password === pass)).length;
    
   // if(users.username.some(user) && users.password.some(pass))
    if(boolUser && boolPass)
    {
      setIsSubmitted(true);
      alert("entraste crack");
      // Routear a home
    }
    else
    {
     setErrorMessage("Usuario o contraseña invalida.");  //preguntaar                                 ??
    }
  };


  const userHandler = (event) =>
  {
    setUser(event.target.value)
  };

  const passHandler = (event) =>
  {
    setPass(event.target.value)
  };

  //Formulario


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
              required />
              </div>
              <div className="input-container">
              <label>Contraseña </label>
              <input
              type="password"
              name="pass"
              value={pass}
              onChange={passHandler}
              required />          
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

export default Login;
