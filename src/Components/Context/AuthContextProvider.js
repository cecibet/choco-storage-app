import { useState, createContext, useContext, useEffect } from "react";

const initialState = {
  currentUser: null,
  waitingLogin: null, //cambié de false a null
  loginError: ""};

 // tiene la data
 const AuthContext = createContext(initialState);

 export function useAuth() {
   let auth = useContext(AuthContext);
   return auth;
 }


//  // esta nose que hace
//  const AuthDispatchContext = createContext(null);

//  export function useAuthDispatch() {
//    return useContext(AuthDispatchContext);
//  }

export function LoginUser(user, pass) {
  console.log(user, pass)
 //console.log("en context provider ", user, pass)
//  const [errorMessage, setErrorMessage] = useState("");
//  const [isSubmitted, setIsSubmitted] = useState(false);

  const [users, setUsers] = useState();
  
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res)
      });
  }, []);
  console.log(users)
  const currentUser = users.filter(
    (us) => us.username === user && us.password === pass
  );

  if (currentUser !== undefined) {
    useAuth.currentUser = currentUser;
    useAuth.waitingLogin = false;
    console.log (currentUser)
  } else {
    useAuth.loginError= "Usuario o contraseña invalida";
  }

  };
  const Logout = () => {
      useAuth.currentUser = null ;
      useAuth.waitingLogin = null ;
      useAuth.loginError= "" ;
      
      return (
        <div><h>hola</h></div>
      )
  };

