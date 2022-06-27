import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import App from "../App/App";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";
import styles from "./index.module.css"

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <Menu />
            <Routes>
                <Route path="/App" element={<App />} />
                <Route path="/" element={<Navigate replace to="/App" />}></Route>
            </Routes>
        </div>
    )
}
export default Layout;
