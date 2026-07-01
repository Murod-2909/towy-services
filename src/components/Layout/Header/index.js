import { useState, useEffect } from "react";
import "../../../assets/style/header.scss";
import logo from "../../../assets/image/logo.png";

const navItems = [
    { label: "Home",     href: "#home"     },
    { label: "About",    href: "#about"    },
    { label: "Services", href: "#services" },
    { label: "Gallery",  href: "#gallery"  },
    { label: "Blog",     href: "#blog"     },
    { label: "Contacts", href: "#contacts" },
];

const leftNavItems  = navItems.slice(0, 3);
const rightNavItems = navItems.slice(3);

function NavList({ items, className = "" }) {
    return (
        <ul className={`header__nav-list ${className}`.trim()}>
            {items.map((item) => (
                <li key={item.href} className="header__nav-item">
                    <a className="header__nav-link" href={item.href}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

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
                <a className="header__brand" href="#home" aria-label="Towy Services home">
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
                </a>

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
                    <ul className="header__nav-list header__nav-list--mobile">
                        {navItems.map((item) => (
                            <li key={item.href} className="header__nav-item">
                                <a
                                    className="header__nav-link"
                                    href={item.href}
                                    onClick={handleMobileLinkClick}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;