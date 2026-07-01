import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../assets/style/header.scss";
import logo from "../../../assets/image/logo.png";

const navItems = [
    { label: "Home",     to: "/"         },
    { label: "About",    to: "/about"    },
    { label: "Services", to: "/services" },
    { label: "Gallery",  to: "/gallery"  },
    { label: "Blog",     to: "/blog"     },
    { label: "Contacts", to: "/contacts" },
];

const leftNavItems  = navItems.slice(0, 3);
const rightNavItems = navItems.slice(3);

function NavList({ items, className = "", onLinkClick }) {
    return (
        <ul className={`header__nav-list ${className}`.trim()}>
            {items.map((item) => (
                <li key={item.to} className="header__nav-item">
                    <NavLink
                        className="header__nav-link"
                        to={item.to}
                        end={item.to === "/"}
                        onClick={onLinkClick}
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Fixed header — scroll detection
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on resize back to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 576) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menu when a mobile link is clicked
    const handleMobileLinkClick = () => setIsOpen(false);

    return (
        <header className={`header${scrolled ? " header--scrolled" : ""}`}>
            <div className="container header__inner">
                {/* Left desktop nav */}
                <nav className="header__nav header__nav--left" aria-label="Left menu">
                    <NavList items={leftNavItems} />
                </nav>

                {/* Logo */}
                <NavLink className="header__brand" to="/" aria-label="Towy Services home">
                    <span className="header__brand-mark" aria-hidden="true">
                        <img
                            src={logo}
                            width="26"
                            height="54"
                            decoding="async"
                            loading="eager"
                            alt="logo"
                        />
                    </span>
                    <span className="header__brand-text">
                        <span className="header__brand-title">24/7 TOWY</span>
                        <span className="header__brand-subtitle">Towing Services</span>
                    </span>
                </NavLink>

                {/* Right desktop nav */}
                <nav className="header__nav header__nav--right" aria-label="Right menu">
                    <NavList items={rightNavItems} />
                </nav>

                {/* Burger button — visible only on mobile */}
                <button
                    className={`header__burger${isOpen ? " is-active" : ""}`}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <span className="header__burger-line" />
                    <span className="header__burger-line" />
                    <span className="header__burger-line" />
                </button>
            </div>

            {/* Mobile nav — slides open/shut via CSS max-height transition */}
            <nav
                id="mobile-menu"
                className={`header__nav-mobile${isOpen ? " is-open" : ""}`}
                aria-label="Mobile menu"
                aria-hidden={!isOpen}
            >
                <div className="container">
                    <NavList
                        items={navItems}
                        className="header__nav-list--mobile"
                        onLinkClick={handleMobileLinkClick}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Header;