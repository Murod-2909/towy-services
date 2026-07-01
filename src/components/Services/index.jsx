import { useEffect, useRef } from "react";
import "./services.scss";

import iconTowing    from "../../assets/image/icon-towing.svg";
import iconHail      from "../../assets/image/icon-hail.svg";
import iconFlood     from "../../assets/image/icon-flood.svg";
import iconAccident  from "../../assets/image/icon-accident.svg";
import iconFire      from "../../assets/image/icon-fire.svg";
import iconMotorcycle from "../../assets/image/icon-motorcycle.svg";

const SERVICES = [
    {
        id: "car-towing",
        title: "Car Towing",
        desc: "We provide fast and safe car towing services across the city. Our flatbed trucks ensure your vehicle arrives without any additional damage.",
        icon: iconTowing,
    },
    {
        id: "hail-damage",
        title: "Hail Damage",
        desc: "Caught in a storm? We respond immediately to hail damage emergencies and tow your vehicle to the nearest certified repair center.",
        icon: iconHail,
    },
    {
        id: "flood-insurance",
        title: "Flood Insurance Coverage",
        desc: "Flood damaged your vehicle? Our team works with all major insurance providers and handles the towing and documentation process for you.",
        icon: iconFlood,
    },
    {
        id: "accident-insurance",
        title: "Accident Insurance",
        desc: "After a collision, the last thing you need is more stress. We coordinate with your insurer and get your car to the repair shop quickly.",
        icon: iconAccident,
    },
    {
        id: "fire-insurance",
        title: "Fire Insurance",
        desc: "Vehicle fire damage requires immediate response. We secure and tow your vehicle safely while you focus on filing your insurance claim.",
        icon: iconFire,
    },
    {
        id: "motorcycle-towing",
        title: "Motorcycle Towing",
        desc: "Motorcycles need special care during towing. Our trained crew uses proper equipment to transport your bike without scratches or damage.",
        icon: iconMotorcycle,
    },
];

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
                        <div key={s.id} className="services__card">
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
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;