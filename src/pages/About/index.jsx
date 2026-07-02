import { useTranslation } from "react-i18next";
import YellowBanner from "../../components/YellowBanner";
import Offer from "../../components/Offer";
import Stats from "../../components/Stats";
import Team from "../../components/Team";
import JoinQuote from "../../components/JoinQuote";
import quoteBg from "../../assets/image/quote-bg.svg";
import "./about.scss";

function About() {
    const { t } = useTranslation();
    const values = t("about.values", { returnObjects: true });

    return (
        <div>
            <YellowBanner title={t("about.bannerTitle")} />

            <Offer number={t("about.offerNumber")} />


            <Team />

            <section className="about-values">
                <div className="container">
                    <div className="about-values__header" data-aos="fade-up">
                        <span className="about-values__eyebrow">{t("about.whyChooseUs")}</span>
                        <h2 className="about-values__heading">
                            {t("about.valuesHeading")} <strong>{t("about.valuesHeadingStrong")}</strong>
                        </h2>
                    </div>

                    <div className="about-values__grid">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="about-values__card"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default About;
