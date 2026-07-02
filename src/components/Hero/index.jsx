import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./hero.scss";


import heroBg1 from "../../assets/image/quote.jpg";
import heroBg2 from "../../assets/image/02-2.jpg";
import heroBg3 from "../../assets/image/top-slider-3.png";
// ─────────────────────────────────────────────────────────────────────

const slides = [
    {
        id: 0,
        bg: heroBg1,
        tag: "Fast & Reliable",
        title: "WE PROVIDE HIGHEST QUALITY",
        accent: "TOWING SERVICES",
        sub: "Fast, courteous and inexpensive towing and roadside assistance in San Diego.",
    },
    {
        id: 1,
        bg: heroBg2,
        tag: "24/7 Available",
        title: "ROADSIDE EMERGENCY",
        accent: "WE'VE GOT YOU COVERED",
        sub: "Day or night, rain or shine — our team arrives in under 30 minutes anywhere in the city.",
    },
    {
        id: 2,
        bg: heroBg3,
        tag: "Professional Team",
        title: "TRUSTED BY THOUSANDS",
        accent: "OF HAPPY DRIVERS",
        sub: "Licensed, insured, and fully equipped to handle any vehicle — cars, trucks, motorcycles.",
    },
];

const AUTOPLAY_DELAY = 5500;

function Hero() {
    const [current, setCurrent]   = useState(0);
    const [animKey, setAnimKey]   = useState(0);
    const timerRef                = useRef(null);

    const goTo = (idx) => {
        setCurrent(idx);
        setAnimKey((k) => k + 1);
    };

    const next = () => goTo((current + 1) % slides.length);
    const prev = () => goTo((current - 1 + slides.length) % slides.length);

    // Autoplay — resets whenever the slide changes (manual nav or auto)
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length);
            setAnimKey((k) => k + 1);
        }, AUTOPLAY_DELAY);
        return () => clearInterval(timerRef.current);
    }, [animKey]);

    const slide = slides[current];

    return (
        <section className="hero" id="home">

            {/* ── Slides (background images) ── */}
            {slides.map((s, i) => (
                <div
                    key={s.id}
                    className={`hero__slide${i === current ? " is-active" : ""}`}
                    style={{ backgroundImage: `url(${s.bg})` }}
                    aria-hidden={i !== current}
                />
            ))}

            <div className="hero__overlay" />

            <div className="hero__content container" key={animKey}>
                <span className="hero__tag">{slide.tag}</span>

                <h1 className="hero__title">
                    {slide.title}
                    <br />
                    <span className="hero__accent">{slide.accent}</span>
                </h1>

                <p className="hero__sub">{slide.sub}</p>

                <div className="hero__actions">
                    <Link to="/services" className="hero__btn hero__btn--primary">
                        Our Services
                    </Link>
                    <Link to="/contacts" className="hero__btn hero__btn--outline">
                        Get a Quote
                    </Link>
                </div>
            </div>

            {/* ── Prev / Next arrows ── */}
            <button
                className="hero__arrow hero__arrow--prev"
                onClick={prev}
                aria-label="Previous slide"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M13 4L7 10L13 16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <button
                className="hero__arrow hero__arrow--next"
                onClick={next}
                aria-label="Next slide"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M7 4L13 10L7 16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* ── Dot navigation ── */}
            <div className="hero__dots" role="tablist" aria-label="Slides">
                {slides.map((s, i) => (
                    <button
                        key={s.id}
                        className={`hero__dot${i === current ? " is-active" : ""}`}
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                        aria-selected={i === current}
                        role="tab"
                    />
                ))}
            </div>

            {/* ── Progress bar (resets with animKey) ── */}
            <div className="hero__progress" key={`progress-${animKey}`} />

            {/* ── Scroll mouse indicator ── */}
            <div className="hero__scroll" aria-hidden="true">
                <div className="hero__mouse">
                    <div className="hero__wheel" />
                </div>
                <span className="hero__scroll-label">SCROLL</span>
            </div>

        </section>
    );
}

function InfoBar() {
    return (
        <div className="info-bar">

            {/* Left — arrival time */}
            <div className="info-bar__cell info-bar__cell--yellow">
                <span className="info-bar__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                </span>
                <span className="info-bar__text">
                    <span className="info-bar__label">Response time</span>
                    <span className="info-bar__value">Less than <strong>30 min</strong> arrival</span>
                </span>
            </div>

            {/* Center — phone number (clickable) */}
            <div className="info-bar__cell info-bar__cell--dark">
                <div className="info-bar__phone-wrap">
                    <span className="info-bar__phone-label">Call us anytime</span>
                    <a className="info-bar__phone" href="tel:08004904545">
                        0 (800) <strong>490 45 45</strong>
                    </a>
                </div>
            </div>

            {/* Right — 24/7 service */}
            <div className="info-bar__cell info-bar__cell--yellow">
                <span className="info-bar__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                                 A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67
                                 A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72
                                 c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91
                                 a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45
                                 c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </span>
                <span className="info-bar__text">
                    <span className="info-bar__label">Always available</span>
                    <span className="info-bar__value">Live <strong>24/7</strong> towing service</span>
                </span>
            </div>

        </div>
    );
}

export { InfoBar };
export default Hero;