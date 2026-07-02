import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './JoinQuote.scss';


const JoinQuote = ({ joinBg = '', quoteBg = '' }) => {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        towFrom: '',
        towTo: '',
        vehicleType: '',
        date: '',
    });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quote submitted:', form);
        // TODO: backend / email service bilan ulash
    };

    return (
        <section className="join-quote-section">

            {/* ─── LEFT: Join Our Team ─── */}
            <div
                className="join-side"
                style={joinBg ? { backgroundImage: `url(${joinBg})` } : {}}
            >
                {/* AOS applies a transform while animating, which would break
                    this panel's fixed-attachment background if placed on the
                    element itself — so it's applied to an inner wrapper instead. */}
                <div className="join-side__inner" data-aos="fade-right">
                    <h2 className="section-heading">
                        {t('joinQuote.joinHeading')} <strong>{t('joinQuote.joinHeadingStrong')}</strong>
                    </h2>
                    <p className="section-sub">{t('joinQuote.joinSub')}</p>
                    <div className="section-divider" />

                    <p className="join-text">{t('joinQuote.joinText')}</p>

                    <button className="btn-apply" type="button">
                        {t('common.applyToday')}
                    </button>
                </div>
            </div>

            {/* ─── RIGHT: Get a Quote ─── */}
            <div
                className="quote-side"
                style={quoteBg ? { backgroundImage: `url(${quoteBg})` } : {}}
            >
                <div className="quote-side__inner" data-aos="fade-left">
                    <h2 className="section-heading">
                        {t('joinQuote.quoteHeading')} <strong>{t('joinQuote.quoteHeadingStrong')}</strong>
                    </h2>
                    <p className="section-sub">{t('joinQuote.quoteSub')}</p>
                    <div className="section-divider" />

                    <form className="quote-form" onSubmit={handleSubmit} noValidate>
                        <input
                            className="form-input"
                            type="text"
                            name="fullName"
                            placeholder={t('joinQuote.fullName')}
                            value={form.fullName}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="tel"
                            name="phone"
                            placeholder={t('joinQuote.phoneNumber')}
                            value={form.phone}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="towFrom"
                            placeholder={t('joinQuote.towFrom')}
                            value={form.towFrom}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="towTo"
                            placeholder={t('joinQuote.towTo')}
                            value={form.towTo}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="vehicleType"
                            placeholder={t('joinQuote.vehicleType')}
                            value={form.vehicleType}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                        />
                    </form>

                    <button className="btn-submit" type="submit" onClick={handleSubmit}>
                        {t('common.submitNow')}
                    </button>
                </div>
            </div>

        </section>
    );
};

export default JoinQuote;
