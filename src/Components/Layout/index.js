import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sell from "../Sell/Sell";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";
import styles from "./index.module.css";
import LoginForm from "../../LoginForm/LoginForm";
import UserProvider from "../Context/AuthContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <UserProvider>
        <Header />
        <Menu />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route
            path="/"
            element={<Navigate replace={true} to="/Login" />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
};
export default Layout;
