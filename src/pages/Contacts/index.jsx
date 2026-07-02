import { useState } from "react";
import { useTranslation } from "react-i18next";
import YellowBanner from "../../components/YellowBanner";
import Map from "../../components/Map";
import { PinIcon, MailIcon, PhoneIcon, ClockIcon } from "../../components/icons";
import "./contacts.scss";

const EMPTY_FORM = { fullName: "", subject: "", phone: "", email: "", message: "" };

function Contacts() {
    const { t } = useTranslation();
    const [form, setForm] = useState(EMPTY_FORM);

    const CONTACT_INFO = [
        { id: "address", icon: PinIcon, value: t("contacts.address") },
        { id: "email", icon: MailIcon, value: "support@247towy.com", href: "mailto:support@247towy.com" },
        { id: "phone", icon: PhoneIcon, value: "0 (800) 490 45 45", href: "tel:08004904545" },
        { id: "hours", icon: ClockIcon, value: t("contacts.hours") },
    ];

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm(EMPTY_FORM);
    };

    return (
        <div>
            <YellowBanner title={t("contacts.bannerTitle")} />

            <section className="contacts-map">
                <Map minHeight={480} />
            </section>

            <section className="contacts-body">
                <div className="container contacts-body__inner">
                    <div className="contacts-body__form" data-aos="fade-right">
                        <h2>
                            {t("contacts.formHeading")} <strong>{t("contacts.formHeadingStrong")}</strong>
                        </h2>
                        <div className="contacts-body__deco" aria-hidden="true">
                            <span /><span /><span /><span />
                        </div>

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="contacts-body__row">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder={t("contacts.fullName")}
                                    value={form.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder={t("contacts.subject")}
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contacts-body__row">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={t("contacts.phoneNumber")}
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t("contacts.email")}
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder={t("contacts.message")}
                                rows="6"
                                value={form.message}
                                onChange={handleChange}
                            />
                            <button type="submit">{t("common.sendMessage")}</button>
                        </form>
                    </div>

                    <div className="contacts-body__info" data-aos="fade-left">
                        <h2>
                            {t("contacts.infoHeading")} <strong>{t("contacts.infoHeadingStrong")}</strong>
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
