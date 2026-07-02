import { useTranslation } from "react-i18next";
import PageBanner from "../../components/PageBanner";
import Services from "../../components/Services";
import JoinQuote from "../../components/JoinQuote";
import quoteBg from "../../assets/image/quote-bg.svg";
import "./servicesPage.scss";

function ServicesPage() {
    const { t } = useTranslation();
    const steps = t("services.steps", { returnObjects: true });

    return (
        <div>
            <PageBanner
                title={t("services.headingStrong")}
                subtitle={t("services.pageSubtitle")}
            />

            <Services />

            <section className="process-section">
                <div className="container">
                    <div className="process-section__header" data-aos="fade-up">
                        <span className="process-section__eyebrow">{t("services.howItWorks")}</span>
                        <h2 className="process-section__heading">
                            {t("services.processHeading")} <strong>{t("services.processHeadingStrong")}</strong>
                        </h2>
                    </div>

                    <div className="process-section__grid">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="process-section__card"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <span className="process-section__num">{String(i + 1).padStart(2, "0")}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <JoinQuote joinBg={quoteBg} quoteBg={quoteBg} />
        </div>
    );
}

export default ServicesPage;
