import "./offer.scss";


import truckImg from "../../assets/image/truck.png";

const features = [
    {
        id: 1,
        text: <>More than <strong>30 years of experience</strong></>,
    },
    {
        id: 2,
        text: <>Short arrival time of <strong>30 minutes or less</strong></>,
    },
    {
        id: 3,
        text: <>Honest competitive prices — <strong>zero hidden fees</strong></>,
    },
    {
        id: 4,
        text: <>Friendly and <strong>professional service</strong></>,
    },
    {
        id: 5,
        text: <>Available <strong>24 hours</strong> a day, <strong>7 days</strong> a week</>,
    },
];

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

function Offer() {
    return (
        <section className="offer" id="about">
            <div className="container offer__inner">

                {/* ── Left: truck image ── */}
                <div className="offer__visual">
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
                <div className="offer__content">
                    <span className="offer__eyebrow">Effective Flatbed Transportation</span>

                    <h2 className="offer__heading">
                        WHAT <strong>WE OFFER</strong>
                    </h2>

                    {/* Yellow dashes */}
                    <div className="offer__deco" aria-hidden="true">
                        <span /><span /><span /><span />
                    </div>

                    <p className="offer__desc">
                        We provide fast, courteous and inexpensive towing services in New York.
                        We are fully insured and been in business since 1986. We are ready to
                        respond to all your vehicle emergency needs 24 hours a day, seven days a week.
                    </p>

                    {/* Feature checklist */}
                    <ul className="offer__list">
                        {features.map((f) => (
                            <li key={f.id} className="offer__item">
                                <span className="offer__check" aria-hidden="true">
                                    <CheckIcon />
                                </span>
                                {f.text}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Offer;