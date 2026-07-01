import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../../assets/image/logo.png";

const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "Contacts", to: "/contacts" },
];

const services = [
    "Car Towing",
    "Hail Damage",
    "Flood Insurance Coverage",
    "Accident Insurance",
    "Fire Insurance",
    "Motorcycle Towing",
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__col footer__col--brand">
                    <Link to="/" className="footer__brand">
                        <img src={logo} width="20" height="42" alt="logo" loading="lazy" decoding="async" />
                        <span>
                            <span className="footer__brand-title">24/7 TOWY</span>
                            <span className="footer__brand-subtitle">Towing Services</span>
                        </span>
                    </Link>
                    <p className="footer__desc">
                        Fast, courteous and inexpensive towing and roadside assistance,
                        available around the clock, every day of the year.
                    </p>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Quick Links</h3>
                    <ul className="footer__list">
                        {quickLinks.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Our Services</h3>
                    <ul className="footer__list">
                        {services.map((label) => (
                            <li key={label}>
                                <Link to="/services">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Get In Touch</h3>
                    <ul className="footer__contact">
                        <li>
                            <a href="tel:08004904545">0 (800) 490 45 45</a>
                        </li>
                        <li>
                            <a href="mailto:support@247towy.com">support@247towy.com</a>
                        </li>
                        <li>Available 24 hours a day, 7 days a week</li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <span>© {year} 24/7 Towy. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
