import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./pageBanner.scss";
import bannerBg from "../../assets/image/top-slider-3.png";

function PageBanner({ title, subtitle }) {
    const { t } = useTranslation();

    return (
        <section className="page-banner" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="page-banner__overlay" />
            <div className="container page-banner__content">
                <h1 className="page-banner__title">{title}</h1>
                {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
                <nav className="page-banner__breadcrumb" aria-label="Breadcrumb">
                    <Link to="/">{t("common.home")}</Link>
                    <span aria-hidden="true">/</span>
                    <span>{title}</span>
                </nav>
            </div>
        </section>
    );
}

export default PageBanner;
