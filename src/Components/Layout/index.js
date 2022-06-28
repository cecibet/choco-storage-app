import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Sell from "../Sell/Sell";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";
import styles from "./index.module.css"
import App from "../App/App";

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Routes>
                <Route path="App" element={< App/>} />
            </Routes>
        </div>
    )
}
export default Layout;
