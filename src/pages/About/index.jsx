import { Link } from "react-router-dom";
import Offer from "../../components/Offer";
import Stats from "../../components/Stats";
import Team from "../../components/Team";
import JoinQuote from "../../components/JoinQuote";
import quoteBg from "../../assets/image/quote-bg.svg";
import gearPattern from "../../assets/image/gear-pattern.svg";
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
            <section
                className="about-banner"
                style={{ backgroundImage: `url(${gearPattern})` }}
            >
                <div className="container about-banner__content">
                    <h1>About</h1>
                    <nav className="about-banner__breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <span>About</span>
                    </nav>
                </div>
            </section>

            <Offer number="01" />


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


        </div>
    );
}

export default About;
