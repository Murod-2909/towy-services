import PageBanner from "../../components/PageBanner";
import Services from "../../components/Services";
import JoinQuote from "../../components/JoinQuote";
import quoteBg from "../../assets/image/quote-bg.svg";
import "./servicesPage.scss";

const STEPS = [
    {
        id: 1,
        title: "Call Dispatch",
        desc: "Reach our 24/7 line with your location and vehicle details.",
    },
    {
        id: 2,
        title: "We Locate You",
        desc: "GPS routing sends the closest available truck straight to you.",
    },
    {
        id: 3,
        title: "We Arrive Fast",
        desc: "Average arrival time is under 30 minutes, day or night.",
    },
    {
        id: 4,
        title: "Safe Delivery",
        desc: "Your vehicle is towed damage-free to your chosen destination.",
    },
];

function ServicesPage() {
    return (
        <div>
            <PageBanner
                title="Our Services"
                subtitle="Emergency towing and roadside assistance for every situation."
            />

            <Services />

            <section className="process-section">
                <div className="container">
                    <div className="process-section__header" data-aos="fade-up">
                        <span className="process-section__eyebrow">How It Works</span>
                        <h2 className="process-section__heading">
                            FROM CALL TO <strong>ROADSIDE</strong>
                        </h2>
                    </div>

                    <div className="process-section__grid">
                        {STEPS.map((step, i) => (
                            <div
                                key={step.id}
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
