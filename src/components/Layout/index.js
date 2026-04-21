import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom"; // ✅ Use 'react-router-dom'

const Layout = () => {
    const { pathname } = useLocation();
    const [text, setText] = useState("");
    const [speaker, setSpeaker] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    const changeSpeakSwitcher = (value) => setSpeaker(value);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isNotFoundRoute = pathname === "/404";

    useEffect(() => {
        document.onmouseup = () => {
            const selectedText = window.getSelection().toString();
            if (speaker && text !== selectedText) {
                window.responsiveVoice.speak(selectedText, "Russian Female");
                setText(selectedText);
            }
        };
    }, [speaker]);

    return (
        <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
            <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />

            <div className="page-content">
                <Outlet /> {/* ✅ Correct usage */}
            </div>

            {!isNotFoundRoute && <Footer />}
        </div>
    );
};

export default Layout;