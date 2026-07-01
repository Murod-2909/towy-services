import { Link } from "react-router-dom";
import "./pageBanner.scss";
import bannerBg from "../../assets/image/hero-3.svg";

function PageBanner({ title, subtitle }) {
    return (
        <section className="page-banner" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="page-banner__overlay" />
            <div className="container page-banner__content">
                <h1 className="page-banner__title">{title}</h1>
                {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
                <nav className="page-banner__breadcrumb" aria-label="Breadcrumb">
                    <Link to="/">Home</Link>
                    <span aria-hidden="true">/</span>
                    <span>{title}</span>
                </nav>
            </div>
        </section>
    );
}

export default PageBanner;
