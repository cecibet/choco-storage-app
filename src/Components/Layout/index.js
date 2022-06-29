import React from "react";
import { Routes, Route } from 'react-router-dom';
import Sell from "../Sell/Sell";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";
import styles from "./index.module.css"
import Login from "../../LoginForm/Login";
import UserProvider from "../Context/AuthContext";

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <UserProvider>
            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>
            <Header />
            <Menu />
            <Routes>
                <Route path="/Sell" element={<Sell />} />
            </Routes>
            </UserProvider>
        </div>
    )
}
export default Layout;
