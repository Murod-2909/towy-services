import YellowBanner from "../../components/YellowBanner";
import Offer from "../../components/Offer";
import Stats from "../../components/Stats";
import Team from "../../components/Team";
import JoinQuote from "../../components/JoinQuote";
import quoteBg from "../../assets/image/quote-bg.svg";
import "./about.scss";

const VALUES = [
    {
        id: "certified",
        title: "Certified & Insured",
        desc: "Every driver is licensed, background-checked and fully insured, so your vehicle is always in safe hands.",
    },
    {
        id: "fleet",
        title: "Modern Fleet",
        desc: "Our flatbeds and wheel-lift trucks are regularly serviced to keep response times fast and towing damage-free.",
    },
    {
        id: "response",
        title: "Rapid Response",
        desc: "Dispatch is staffed 24/7 with GPS-routed trucks, keeping our average arrival time under 30 minutes.",
    },
    {
        id: "pricing",
        title: "Transparent Pricing",
        desc: "No hidden fees — you get an upfront quote before the truck ever leaves the yard.",
    },
];

function About() {
    return (
        <div>
            <YellowBanner title="About" />

            <Offer number="01" />

            <Stats />

            <Team />

            <section className="about-values">
                <div className="container">
                    <div className="about-values__header">
                        <span className="about-values__eyebrow">Why Choose Us</span>
                        <h2 className="about-values__heading">
                            WHAT MAKES US <strong>DIFFERENT</strong>
                        </h2>
                    </div>

                    <div className="about-values__grid">
                        {VALUES.map((v) => (
                            <div key={v.id} className="about-values__card">
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <JoinQuote joinBg={quoteBg} quoteBg={quoteBg} />
        </div>
    );
}

export default About;
