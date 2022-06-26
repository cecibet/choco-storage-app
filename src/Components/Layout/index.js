import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App/App";
import Login from "../App/LoginForm/Login";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/App" element={<App />} />
        <Route path="/" element={<Navigate to="/App" />}></Route>
      </Routes>
    </div>
  );
};
export default Layout;
