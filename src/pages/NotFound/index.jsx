import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./notFound.scss";

function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="not-found">
            <div className="container not-found__inner">
                <span className="not-found__code">{t("notFound.code")}</span>
                <h1 className="not-found__title">{t("notFound.title")}</h1>
                <p className="not-found__desc">{t("notFound.desc")}</p>
                <Link to="/" className="not-found__btn">
                    {t("notFound.backHome")}
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
