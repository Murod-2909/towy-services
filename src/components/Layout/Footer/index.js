import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/style/footer.scss";
import logo from "../../../assets/image/logo.png";
import postImg1 from "../../../assets/image/02-2.jpg";
import postImg2 from "../../../assets/image/06-1.jpg";
import {
    SendIcon,
    ChevronIcon,
    PinIcon,
    PhoneIcon,
    MailIcon,
    ClockIcon,
    HeartIcon,
    SOCIAL_LINKS,
} from "../../icons";

const usefulLinks = [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "Contacts", to: "/contacts" },
    { label: "Home", to: "/" },
];

const latestPosts = [
    { id: 1, img: postImg1, title: "Fast Response Towing Service", date: "12 Jun 2026" },
    { id: 2, img: postImg2, title: "Motorcycle Towing Done Right", date: "9 May 2026" },
];

const Footer = () => {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        setEmail("");
    };

    return (
        <footer className="footer">
            <div className="footer__newsletter">
                <div className="container footer__newsletter-inner">
                    <span className="footer__newsletter-label">
                        Register for <strong>our newsletter</strong>
                    </span>

                    <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            required
                            placeholder="Enter e-mail address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" aria-label="Subscribe">
                            <SendIcon />
                        </button>
                    </form>

                    <span className="footer__newsletter-label footer__newsletter-label--right">
                        Get latest <strong>company news</strong>
                    </span>
                </div>
            </div>

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
                    <div className="footer__social">
                        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Useful Links</h3>
                    <div className="footer__deco" aria-hidden="true" />
                    <ul className="footer__list footer__list--links">
                        {usefulLinks.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to}>
                                    <ChevronIcon /> {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Get In Touch</h3>
                    <div className="footer__deco" aria-hidden="true" />
                    <ul className="footer__contact">
                        <li>
                            <PinIcon />
                            <span>2551 Alfred Drive, Brooklyn, NY</span>
                        </li>
                        <li>
                            <PhoneIcon />
                            <a href="tel:08004904545">0 (800) 490 45 45</a>
                        </li>
                        <li>
                            <MailIcon />
                            <a href="mailto:support@247towy.com">support@247towy.com</a>
                        </li>
                        <li>
                            <ClockIcon />
                            <span>24 hours a day, 7 days a week</span>
                        </li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Latest Posts</h3>
                    <div className="footer__deco" aria-hidden="true" />
                    <ul className="footer__posts">
                        {latestPosts.map((post) => (
                            <li key={post.id}>
                                <Link to="/blog" className="footer__post-thumb">
                                    <img src={post.img} alt="" loading="lazy" decoding="async" />
                                </Link>
                                <div>
                                    <Link to="/blog" className="footer__post-title">
                                        {post.title}
                                    </Link>
                                    <span className="footer__post-date">{post.date}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <span>
                        24/7 Towy - Towing Services <HeartIcon /> All Rights Reserved &copy; {year}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

