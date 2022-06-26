import React, { useReducer, createContext, useContext } from "react";

const initialState = {
  currentUser: null,
  waitingLogin: null, //cambié de false a null
  loginError: "",
  token: null, // JSON Web Token (JWT)
};

export const AuthContext = createContext(initialState);

export const AuthDispatchContext = createContext(null);

export function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
  }
  
  export function useAuthDispatch() {
    return useContext(AuthDispatchContext);
  }

export default function AuthContextProvider({ children }) {         //esta bien el "default"?
  const [auth, dispatch] = useReducer(authReducer, initialState);

  const baseUrl = "http://localhost:8765/api";


  const asyncDispatcher = {
    login: (email, password) => {
      dispatch({ type: "setWaitingLogin", waiting: true });
      fetch(baseUrl + "/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),  //ver si cambio "email" por "user" en la DB
      })
        .then((res) => res.json())
        .then((loginResponse) => {
          console.log("login ok", loginResponse); //dsps borrar!!
          if (loginResponse && loginResponse.token) {
            dispatch({ type: "setToken", token: loginResponse.token });
            setTimeout(() => {
              fetch(baseUrl + "/users?email=" + encodeURIComponent(email), {
                method: "GET",
                headers: {
                  Authorization: "Bearer " + loginResponse.token,
                },
              })
                .then((res) => res.json())
                .then((res) => {
                  console.log("get ok", res); //dsps borrar!!
                  if (res.length > 0) {
                    dispatch({ type: "setCurrentUser", currentUser: res[0] });
                  } else {
                    dispatch({
                      type: "setError",
                      error: "Usuario inexistente.",
                    });
                  }
                })
                .catch(() => {
                  dispatch({
                    type: "setError",
                    error: "Ocurrio un error inesperado.",
                  });
                });
            }, 3000);
          } else {
            dispatch({ type: "setError", error: "Usuario inexistente." });
          }
        })
        .catch(() => {
          dispatch({ type: "setError", error: "Ocurrio un error inesperado." });
        });
    },
    logout: () => {
      dispatch({ type: "setCurrentUser", currentUser: null });
      dispatch({ type: "setToken", token: null });
    },
  };

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={asyncDispatcher}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

function authReducer(state, action) {
  console.log("authReducer", action.type, state, action); //borrar despues
  switch (action.type) {
    case "setCurrentUser": {
      return { ...state, currentUser: action.currentUser, waitingLogin: false };
    }
    case "setToken": {
      return { ...state, token: action.token };
    }
    case "setWaitingLogin": {
      return { ...state, waitingLogin: action.waiting };
    }
    case "setError": {
      return { ...state, loginError: action.error, waitingLogin: false };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

