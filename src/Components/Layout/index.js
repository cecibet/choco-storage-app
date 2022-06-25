import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import App from "../App/App";

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route path="/App" element={<App />} />
                <Route path="/" element={<Navigate replace to="/App" />}></Route>
            </Routes>
        </div>
    )
}
export default Layout;
