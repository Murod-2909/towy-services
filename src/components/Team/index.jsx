import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./team.scss";
import avatar1 from "../../assets/image/avatar-1.svg";
import avatar2 from "../../assets/image/avatar-2.svg";
import avatar3 from "../../assets/image/avatar-3.svg";

const AVATARS = [avatar1, avatar2, avatar3];

const AUTOPLAY_DELAY = 6000;

function Team() {
    const { t } = useTranslation();
    const members = t("team.members", { returnObjects: true }).map((m, i) => ({
        ...m,
        avatar: AVATARS[i],
    }));

    const [index, setIndex] = useState(0);

    const goTo = (i) => setIndex((i + members.length) % members.length);
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    useEffect(() => {
        const timer = setInterval(next, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const member = members[index];

    return (
        <section className="team" data-aos="fade-up">
            <div className="team__grid" aria-hidden="true" />
            <div className="team__overlay" aria-hidden="true" />

            <button className="team__arrow team__arrow--prev" onClick={prev} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="container team__content" key={index}>
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
