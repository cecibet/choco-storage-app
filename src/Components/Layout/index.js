import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Sell from "../Sell/Sell";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";
import styles from "./index.module.css"
import Login from "../../LoginForm/Login";

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>
            <Header />
            <Menu />
            <Routes>
                <Route path="/Sell" element={<Sell />} />
            </Routes>
        </div>
    )
}
export default Layout;
