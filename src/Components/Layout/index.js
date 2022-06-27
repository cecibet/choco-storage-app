import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import App from "../App/App";
import Header from "../Header/Header";
import Menu from "../Navbar/Menu/Menu";

const Layout = () => {
    return (
        <div>
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
