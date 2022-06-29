import { createContext, useState, useEffect } from "react";

// @function  UserContext
export const UserContext = createContext({});

// @function  UserProvider
// Create function to provide UserContext
export default function UserProvider({ children }) {
  const [actualUser, setActualUser] = useState({});
  const [users, setUsers] = useState({});
  

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);


  const login = (user, pass) => {
    console.log("estoy en login :)", user, pass) //
    setActualUser(users.filter(
      (us) => us.username === user && us.password === pass
    ))
    console.log(actualUser); //
    }

    const logout = () => {
      console.log("me quiero salir :(")   //
      setUsers({});

    };

    return (
      <UserContext.Provider
        value={{login, logout, actualUser}}
      >
        {children}
      </UserContext.Provider>
    );
  };
