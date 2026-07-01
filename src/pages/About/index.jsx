import PageBanner from "../../components/PageBanner";
import Stats from "../../components/Stats";
import JoinQuote from "../../components/JoinQuote";
import truckImg from "../../assets/image/truck.svg";
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
            <PageBanner
                title="About Us"
                subtitle="Three decades of fast, honest towing and roadside assistance."
            />

            <section className="about-story">
                <div className="container about-story__inner">
                    <div className="about-story__visual">
                        <div className="about-story__circle" aria-hidden="true" />
                        <img
                            className="about-story__truck"
                            src={truckImg}
                            alt="Flatbed tow truck"
                            width="480"
                            height="320"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="about-story__content">
                        <span className="about-story__eyebrow">Who We Are</span>
                        <h2 className="about-story__heading">
                            OUR <strong>STORY</strong>
                        </h2>
                        <div className="about-story__deco" aria-hidden="true">
                            <span /><span /><span /><span />
                        </div>
                        <p>
                            Since 1986, 24/7 Towy has grown from a single truck and a phone
                            line into a full roadside assistance network trusted by
                            thousands of drivers. What hasn't changed is our promise:
                            answer fast, arrive faster, and treat every vehicle like it's
                            our own.
                        </p>
                        <p>
                            Today our dispatchers, drivers and mechanics work around the
                            clock so that a flat tire, a dead battery or a collision never
                            has to ruin your day for longer than it takes us to reach you.
                        </p>
                    </div>
                </div>
            </section>

            <Stats />

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
