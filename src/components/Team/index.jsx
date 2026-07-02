import { useEffect, useState } from "react";
import "./team.scss";
import avatar1 from "../../assets/image/avatar-1.svg";
import avatar2 from "../../assets/image/avatar-2.svg";
import avatar3 from "../../assets/image/avatar-3.svg";

const MEMBERS = [
    {
        id: 1,
        name: "Lulu Russell",
        role: "Operations Director",
        avatar: avatar1,
        quote: "Our dispatch team gets a truck moving within minutes of every call. That commitment to speed and honesty is what our drivers are known for across the city.",
    },
    {
        id: 2,
        name: "James Cooper",
        role: "Lead Technician",
        avatar: avatar2,
        quote: "Every truck in our fleet is inspected before each shift. We'd rather delay a job by five minutes than risk damaging a customer's vehicle.",
    },
    {
        id: 3,
        name: "Maria Chen",
        role: "Customer Care Manager",
        avatar: avatar3,
        quote: "People call us on their worst day on the road. Our job is to make the rest of that day as easy as possible, from the first call to the final drop-off.",
    },
];

const AUTOPLAY_DELAY = 6000;

function Team() {
    const [index, setIndex] = useState(0);

    const goTo = (i) => setIndex((i + MEMBERS.length) % MEMBERS.length);
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    useEffect(() => {
        const timer = setInterval(next, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const member = MEMBERS[index];

    return (
        <section className="team" data-aos="fade-up">
            <div className="team__grid" aria-hidden="true" />
            <div className="team__overlay" aria-hidden="true" />

            <button className="team__arrow team__arrow--prev" onClick={prev} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="container team__content" key={member.id}>
                <div className="team__avatar">
                    <img src={member.avatar} alt={member.name} width="90" height="90" loading="lazy" decoding="async" />
                </div>

                <p className="team__quote">{member.quote}</p>

                <div className="team__meta">
                    <span className="team__name">{member.name}</span>
                    <span className="team__role">{member.role}</span>
                </div>
            </div>

            <button className="team__arrow team__arrow--next" onClick={next} aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </section>
    );
}

export default Team;
