import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./services.scss";
import { SERVICES } from "../../data/services";

function Services() {
    const { t } = useTranslation();

    return (
        <section className="services" id="services">
            <div className="container">

                {/* ── Section header ── */}
                <div className="services__header" data-aos="fade-up">
                    <span className="services__eyebrow">{t("services.eyebrow")}</span>
                    <h2 className="services__heading">
                        {t("services.heading")} <strong>{t("services.headingStrong")}</strong>
                    </h2>
                    <div className="services__deco" aria-hidden="true">
                        <span /><span /><span /><span />
                    </div>
                </div>

                {/* ── Cards grid ── */}
                <div className="services__grid">
                    {SERVICES.map((s, i) => (
                        <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            className="services__card"
                            data-aos="fade-up"
                            data-aos-delay={(i % 3) * 100}
                        >
                            <span className="services__icon" aria-hidden="true">
                                <img
                                    src={s.icon}
                                    alt={t(`services.items.${s.id}.title`)}
                                    width="90"
                                    height="90"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </span>
                            <h3 className="services__title">{t(`services.items.${s.id}.title`)}</h3>
                            <p className="services__desc">{t(`services.items.${s.id}.desc`)}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;
