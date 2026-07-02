import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./stats.scss";

import statsBg from "../../assets/image/counters.jpg";

const STATS = [
    { id: "experience", value: 30, suffix: "+", icon: <StarIcon /> },
    { id: "offices", value: 12, suffix: "", icon: <BuildingIcon /> },
    { id: "vehicles", value: 9800, suffix: "+", icon: <TruckIcon /> },
    { id: "workers", value: 145, suffix: "", icon: <TeamIcon /> },
];

// ── Count-up hook ─────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, active = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;

        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [active, target, duration]);

    return count;
}

// ── Stat item ─────────────────────────────────────────────────────────
function StatItem({ value, suffix, label, icon, active, delay }) {
    const count = useCountUp(value, 1800, active);

    return (
        <div
            className="stats__item"
            data-aos="zoom-in"
            data-aos-delay={delay}
        >
            <span className="stats__icon" aria-hidden="true">
                {icon}
            </span>
            <span className="stats__number" aria-live="polite">
                {count.toLocaleString()}{suffix}
            </span>
            <span className="stats__label">{label}</span>
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────
function Stats() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const bgRef      = useRef(null);
    const [visible, setVisible] = useState(false);

    // ── Intersection Observer — count-up trigger ──
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // ── Parallax scroll ──
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !bgRef.current) return;

            const rect     = sectionRef.current.getBoundingClientRect();
            const winH     = window.innerHeight;
            const sectionH = sectionRef.current.offsetHeight;

            // Visible range: from entering viewport to leaving
            const relPos   = (winH - rect.top) / (winH + sectionH);
            // Move background -15% to +15% vertically (parallax depth)
            const offset   = (relPos - 0.5) * -30;

            bgRef.current.style.transform = `translateY(${offset}%)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial call
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="stats" ref={sectionRef} id="stats" aria-label="Company statistics">

            {/* Parallax background — full width, JS controlled */}
            <div
                className="stats__bg"
                ref={bgRef}
                style={{ backgroundImage: `url(${statsBg})` }}
                aria-hidden="true"
            />

            {/* Dark overlay */}
            <div className="stats__overlay" aria-hidden="true" />

            {/* Content inside container */}
            <div className="container">
                <div className="stats__inner">
                    {STATS.map((s, i) => (
                        <StatItem
                            key={s.id}
                            value={s.value}
                            suffix={s.suffix}
                            label={t(`stats.${s.id}`)}
                            icon={s.icon}
                            active={visible}
                            delay={i * 120}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Stats;

// ── SVG Icons ─────────────────────────────────────────────────────────
function StarIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="currentColor">
            <path d="M24 4l5.5 11.2L42 17.3l-9 8.7 2.1 12.3L24 32.4l-11.1 5.9L15 26 6 17.3l12.5-2.1z"/>
        </svg>
    );
}

function BuildingIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="currentColor">
            <rect x="4"  y="10" width="18" height="34" rx="1"/>
            <rect x="26" y="18" width="18" height="26" rx="1"/>
            <rect x="8"  y="15" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="15" y="15" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="8"  y="23" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="15" y="23" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="8"  y="31" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="15" y="31" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="30" y="23" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="37" y="23" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="30" y="31" width="4" height="4" fill="#111" opacity=".35"/>
            <rect x="37" y="31" width="4" height="4" fill="#111" opacity=".35"/>
        </svg>
    );
}

function TruckIcon() {
    return (
        <svg viewBox="0 0 56 32" fill="currentColor">
            {/* Cab */}
            <rect x="30" y="4" width="20" height="18" rx="2"/>
            {/* Flatbed */}
            <rect x="2" y="16" width="50" height="5" rx="1"/>
            {/* Wheels */}
            <circle cx="12" cy="26" r="5"/>
            <circle cx="42" cy="26" r="5"/>
            {/* Hook arm */}
            <path d="M28 10 Q36 10 36 4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <circle cx="36" cy="3" r="2.5"/>
        </svg>
    );
}

function TeamIcon() {
    return (
        <svg viewBox="0 0 56 40" fill="currentColor">
            {/* Center person */}
            <circle cx="28" cy="10" r="7"/>
            <path d="M14 38c0-7.7 6.3-14 14-14s14 6.3 14 14" />
            {/* Left person */}
            <circle cx="10" cy="13" r="5.5"/>
            <path d="M0 38c0-6 4.5-11 10-11" />
            {/* Right person */}
            <circle cx="46" cy="13" r="5.5"/>
            <path d="M56 38c0-6-4.5-11-10-11"/>
        </svg>
    );
}