import React, { useEffect, useState } from "react";
import AOS from "aos";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./scrollTopButton.scss";

const Layout = () => {
    const { pathname } = useLocation();
    const isNotFoundRoute = pathname === "/404";
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Re-scan the DOM for data-aos elements after each route's content mounts
    useEffect(() => {
        AOS.refresh();
    }, [pathname]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
            <Header />

            <div className="page-content">
                <Outlet />
            </div>

            {!isNotFoundRoute && <Footer />}

            <button
                type="button"
                className={`scroll-top-btn${showTopBtn ? " is-visible" : ""}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </button>
        </div>
    );
};

export default Layout;
