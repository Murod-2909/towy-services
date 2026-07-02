import { useTranslation } from "react-i18next";
import "./offer.scss";


import truckImg from "../../assets/image/truck.png";

function CheckIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <polyline
                points="3 9 7 13 15 5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function Offer({ number }) {
    const { t } = useTranslation();
    const features = t("offer.features", { returnObjects: true });

    return (
        <section className="offer" id="about">
            <div className="container offer__inner">

                {/* ── Left: truck image ── */}
                <div className="offer__visual" data-aos="fade-right">
                    <div className="offer__circle" aria-hidden="true" />
                    <div className="offer__city"   aria-hidden="true" />
                    <img
                        className="offer__truck"
                        src={truckImg}
                        alt="Flatbed tow truck"
                        width="480"
                        height="320"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* ── Right: content ── */}
                <div className="offer__content" data-aos="fade-left">
                    {number && <span className="offer__number" aria-hidden="true">{number}</span>}
                    <span className="offer__eyebrow">{t("offer.eyebrow")}</span>

                    <h2 className="offer__heading">
                        {t("offer.heading")} <strong>{t("offer.headingStrong")}</strong>
                    </h2>

                    {/* Yellow dashes */}
                    <div className="offer__deco" aria-hidden="true">
                        <span /><span /><span /><span />
                    </div>

                    <p className="offer__desc">{t("offer.desc")}</p>

                    {/* Feature checklist */}
                    <ul className="offer__list">
                        {features.map((f, i) => (
                            <li
                                key={i}
                                className="offer__item"
                                data-aos="fade-up"
                                data-aos-delay={100 + i * 80}
                            >
                                <span className="offer__check" aria-hidden="true">
                                    <CheckIcon />
                                </span>
                                {f.prefix} <strong>{f.strong}</strong>{f.middle ? <> {f.middle} <strong>{f.strong2}</strong></> : null} {f.suffix}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Offer;
