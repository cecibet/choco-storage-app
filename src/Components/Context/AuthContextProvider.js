import { useState, createContext, useContext, useEffect } from "react";
import


 // tiene la data
 const AuthContext = React.createContext({});

 export function useAuth() {
   const auth = useContext(AuthContext);
   return auth;
 }


