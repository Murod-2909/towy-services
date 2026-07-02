import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./yellowBanner.scss";
import gearPattern from "../../assets/image/gear-pattern.svg";

function YellowBanner({ title }) {
    const { t } = useTranslation();

    return (
        <section
            className="yellow-banner"
            style={{ backgroundImage: `url(${gearPattern})` }}
        >
            <div className="container yellow-banner__content">
                <h1>{title}</h1>
                <nav className="yellow-banner__breadcrumb" aria-label="Breadcrumb">
                    <Link to="/">{t("common.home")}</Link>
                    <span aria-hidden="true">/</span>
                    <span>{title}</span>
                </nav>
            </div>
        </section>
    );
}

export default YellowBanner;
