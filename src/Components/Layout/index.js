import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sell from "../Sell/Sell";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";
import styles from "./index.module.css";
import LoginForm from "../LoginForm/LoginForm";
import UserProvider from "../Context/AuthContext";
import Home from "../Home/Home";
import CheckStock from "../CheckStock/CheckStock";

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <UserProvider>
        <Header />
        <Menu />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/CheckStock" element={<CheckStock />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route
            path="/"
            element={<Navigate replace={true} to="/Login" />}
          ></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
};
export default Layout;
