import { useState } from "react";
import YellowBanner from "../../components/YellowBanner";
import Map from "../../components/Map";
import { PinIcon, MailIcon, PhoneIcon, ClockIcon } from "../../components/icons";
import "./contacts.scss";

const CONTACT_INFO = [
    {
        id: "address",
        icon: PinIcon,
        value: "2551 Alfred Drive, Brooklyn, NY",
    },
    {
        id: "email",
        icon: MailIcon,
        value: "support@247towy.com",
        href: "mailto:support@247towy.com",
    },
    {
        id: "phone",
        icon: PhoneIcon,
        value: "0 (800) 490 45 45",
        href: "tel:08004904545",
    },
    {
        id: "hours",
        icon: ClockIcon,
        value: "24 hours a day, 7 days a week",
    },
];

const EMPTY_FORM = { fullName: "", subject: "", phone: "", email: "", message: "" };

function Contacts() {
    const [form, setForm] = useState(EMPTY_FORM);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm(EMPTY_FORM);
    };

    return (
        <div>
            <YellowBanner title="Contacts" />

            <section className="contacts-map">
                <Map minHeight={480} />
            </section>

            <section className="contacts-body">
                <div className="container contacts-body__inner">
                    <div className="contacts-body__form">
                        <h2>
                            Contact <strong>Form</strong>
                        </h2>
                        <div className="contacts-body__deco" aria-hidden="true">
                            <span /><span /><span /><span />
                        </div>

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="contacts-body__row">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full name"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contacts-body__row">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="6"
                                value={form.message}
                                onChange={handleChange}
                            />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    <div className="contacts-body__info">
                        <h2>
                            Contact <strong>Info</strong>
                        </h2>
                        <div className="contacts-body__deco" aria-hidden="true">
                            <span /><span /><span /><span />
                        </div>

                        <ul>
                            {CONTACT_INFO.map(({ id, icon: Icon, value, href }) => (
                                <li key={id}>
                                    <Icon />
                                    {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;
