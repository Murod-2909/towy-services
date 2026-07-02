import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./services.scss";
import { SERVICES } from "../../data/services";

function Services() {
    const gridRef = useRef(null);

    // Intersection Observer — cards appear on scroll
    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll(".services__card");
        if (!cards) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="services" id="services">
            <div className="container">

                {/* ── Section header ── */}
                <div className="services__header">
                    <span className="services__eyebrow">Emergency Roadside Assistance</span>
                    <h2 className="services__heading">
                        OUR <strong>SERVICES</strong>
                    </h2>
                    <div className="services__deco" aria-hidden="true">
                        <span /><span /><span /><span />
                    </div>
                </div>

                {/* ── Cards grid ── */}
                <div className="services__grid" ref={gridRef}>
                    {SERVICES.map((s) => (
                        <Link key={s.id} to={`/services/${s.id}`} className="services__card">
                            <span className="services__icon" aria-hidden="true">
                                <img
                                    src={s.icon}
                                    alt={s.title}
                                    width="90"
                                    height="90"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </span>
                            <h3 className="services__title">{s.title}</h3>
                            <p className="services__desc">{s.desc}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;
