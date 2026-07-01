import PageBanner from "../../components/PageBanner";
import JoinQuote from "../../components/JoinQuote";
import MapFaq from "../../components/MapFaq";
import quoteBg from "../../assets/image/quote-bg.svg";
import "./contacts.scss";

const CONTACT_INFO = [
    {
        id: "phone",
        label: "Call Us",
        value: "0 (800) 490 45 45",
        href: "tel:08004904545",
    },
    {
        id: "email",
        label: "Email Us",
        value: "support@247towy.com",
        href: "mailto:support@247towy.com",
    },
    {
        id: "hours",
        label: "Working Hours",
        value: "24 hours a day, 7 days a week",
    },
];

function Contacts() {
    return (
        <div>
            <PageBanner
                title="Contact Us"
                subtitle="Reach our dispatch team any time — we're always on call."
            />

            <section className="contact-info">
                <div className="container contact-info__grid">
                    {CONTACT_INFO.map((item) => (
                        <div className="contact-info__card" key={item.id}>
                            <span className="contact-info__label">{item.label}</span>
                            {item.href ? (
                                <a className="contact-info__value" href={item.href}>
                                    {item.value}
                                </a>
                            ) : (
                                <span className="contact-info__value">{item.value}</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <JoinQuote joinBg={quoteBg} quoteBg={quoteBg} />

            <MapFaq />
        </div>
    );
}

export default Contacts;
