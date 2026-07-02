import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
    { key: "nav.about", to: "/about" },
    { key: "nav.services", to: "/services" },
    { key: "nav.gallery", to: "/gallery" },
    { key: "nav.blog", to: "/blog" },
    { key: "nav.contacts", to: "/contacts" },
    { key: "nav.home", to: "/" },
];

const latestPosts = [
    { id: 1, img: postImg1, key: "blogCarousel.posts.0.title", date: "12 Jun 2026" },
    { id: 2, img: postImg2, key: "blogCarousel.posts.2.title", date: "9 May 2026" },
];

const Footer = () => {
    const { t } = useTranslation();
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
                        {t("footer.registerNewsletter")} <strong>{t("footer.registerNewsletterStrong")}</strong>
                    </span>

                    <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            required
                            placeholder={t("footer.enterEmail")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" aria-label="Subscribe">
                            <SendIcon />
                        </button>
                    </form>

                    <span className="footer__newsletter-label footer__newsletter-label--right">
                        {t("footer.getLatestNews")} <strong>{t("footer.getLatestNewsStrong")}</strong>
                    </span>
                </div>
            </div>

            <div className="container footer__inner">
                <div className="footer__col footer__col--brand">
                    <Link to="/" className="footer__brand">
                        <img src={logo} width="20" height="42" alt="logo" loading="lazy" decoding="async" />
                        <span>
                            <span className="footer__brand-title">{t("header.brandTitle")}</span>
                            <span className="footer__brand-subtitle">{t("header.brandSubtitle")}</span>
                        </span>
                    </Link>
                    <p className="footer__desc">{t("footer.desc")}</p>
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
                    <h3 className="footer__heading">{t("footer.usefulLinks")}</h3>
                    <div className="footer__deco" aria-hidden="true" />
                    <ul className="footer__list footer__list--links">
                        {usefulLinks.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to}>
                                    <ChevronIcon /> {t(item.key)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">{t("footer.getInTouch")}</h3>
                    <div className="footer__deco" aria-hidden="true" />
                    <ul className="footer__contact">
                        <li>
                            <PinIcon />
                            <span>{t("contacts.address")}</span>
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
                            <span>{t("contacts.hours")}</span>
                        </li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">{t("footer.latestPosts")}</h3>
                    <div className="footer__deco" aria-hidden="true" />
                    <ul className="footer__posts">
                        {latestPosts.map((post) => (
                            <li key={post.id}>
                                <Link to="/blog" className="footer__post-thumb">
                                    <img src={post.img} alt="" loading="lazy" decoding="async" />
                                </Link>
                                <div>
                                    <Link to="/blog" className="footer__post-title">
                                        {t(post.key)}
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
                        {t("header.brandTitle")} - {t("header.brandSubtitle")} <HeartIcon /> {t("footer.rights")} &copy; {year}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
