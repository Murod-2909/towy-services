import { Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageBanner from "../../components/PageBanner";
import JoinQuote from "../../components/JoinQuote";
import { getServiceById } from "../../data/services";
import quoteBg from "../../assets/image/quote-bg.svg";
import "./singleService.scss";

function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
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

function SingleService() {
    const { slug } = useParams();
    const service = getServiceById(slug);
    const { t } = useTranslation();

    if (!service) {
        return <Navigate to="/404" replace />;
    }

    const title = t(`services.items.${slug}.title`);
    const desc = t(`services.items.${slug}.desc`);
    const description = t(`services.items.${slug}.description`);
    const extra = t(`services.items.${slug}.extra`);
    const checklist = t(`services.items.${slug}.checklist`, { returnObjects: true });

    return (
        <div>
            <PageBanner title={title} subtitle={desc} />

            <section className="single-service">
                <div className="container single-service__inner">
                    <div className="single-service__image" data-aos="fade-right">
                        <img
                            src={service.image}
                            alt={title}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="single-service__content" data-aos="fade-left">
                        <h2>{title}</h2>
                        <div className="single-service__deco" aria-hidden="true">
                            <span /><span /><span /><span />
                        </div>

                        <p>{description}</p>

                        <ul className="single-service__list">
                            {checklist.map((item) => (
                                <li key={item}>
                                    <span className="single-service__check" aria-hidden="true">
                                        <CheckIcon />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <p className="single-service__extra">{extra}</p>
                </div>
            </section>

            <JoinQuote joinBg={quoteBg} quoteBg={quoteBg} />
        </div>
    );
}

export default SingleService;
