import { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../../assets/image/logo.png";
import postImg1 from "../../../assets/image/gallery-1.svg";
import postImg2 from "../../../assets/image/gallery-3.svg";

const usefulLinks = [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "Contacts", to: "/contacts" },
    { label: "Home", to: "/" },
];

const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
    { label: "X", href: "https://x.com", icon: XIcon },
    { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { label: "Pinterest", href: "https://pinterest.com", icon: PinterestIcon },
    { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
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
                        {socialLinks.map(({ label, href, icon: Icon }) => (
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

// ── Icons ───────────────────────────────────────────────────────────
function SendIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22l-4-9-9-4 20-7z" />
        </svg>
    );
}

function ChevronIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 6-10 7L2 6" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-6.7-4.35-9.33-8.2C.98 10.1 1.6 6.6 4.6 5.1c2.2-1.1 4.6-.3 6 1.4a4.9 4.9 0 0 1 1.4-1.4c1.4-1.4 3.8-2.5 6-1.4 3 1.5 3.62 5 1.93 7.7C18.7 16.65 12 21 12 21z" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12z" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.3 2H21l-6.4 7.3L22 22h-6.9l-5.4-6.6L3.5 22H1l6.9-7.9L1 2h7l4.9 6L18.3 2z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function PinterestIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-3.64 19.3c-.05-.83-.09-2.1.02-3 .1-.42.65-2.78.65-2.78s-.17-.33-.17-.83c0-.78.45-1.36 1.02-1.36.48 0 .71.36.71.79 0 .48-.31 1.2-.46 1.87-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.57 0-1.34-.97-2.28-2.35-2.28-1.6 0-2.54 1.2-2.54 2.44 0 .48.19.99.42 1.27a.17.17 0 0 1 .04.16l-.16.65c-.02.11-.08.13-.19.08-.72-.33-1.16-1.38-1.16-2.22 0-1.8 1.31-3.46 3.78-3.46 1.98 0 3.53 1.42 3.53 3.31 0 1.98-1.24 3.57-2.97 3.57-.58 0-1.13-.3-1.31-.66l-.36 1.36c-.13.5-.48 1.12-.71 1.5A10 10 0 1 0 12 2z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.9 8.65 22 11 22 14.4V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9z" />
        </svg>
    );
}
