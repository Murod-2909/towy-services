import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './App';
import "./assets/style/global.scss"
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./i18n";

AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
});

// Loaded at runtime (not in index.html) so a slow/unreachable font CDN
// never blocks the page's initial render or load event.
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";
document.head.appendChild(fontLink);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>
);