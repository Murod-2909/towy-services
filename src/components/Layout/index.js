import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const { pathname } = useLocation();
    const isNotFoundRoute = pathname === "/404";

    return (
        <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
            <Header />

            <div className="page-content">
                <Outlet />
            </div>

            {!isNotFoundRoute && <Footer />}
        </div>
    );
};

export default Layout;