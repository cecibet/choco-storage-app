import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Sell from "../Sell/Sell";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";
import styles from "./index.module.css"

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <Menu />
            <Routes>
                <Route path="/Sell" element={<Sell />} />
                <Route path="/" element={<Navigate replace to="/Sell" />}></Route>
            </Routes>
        </div>
    )
}
export default Layout;
