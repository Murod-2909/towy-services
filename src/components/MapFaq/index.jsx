import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MapFaq.scss';
import Map from '../Map';

// ── Main component ──
const MapFaq = () => {
    const { t } = useTranslation();
    const faqs = t('mapFaq.items', { returnObjects: true });
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <section className="mapfaq-section">

            {/* LEFT: Leaflet map */}
            <div className="map-side" data-aos="fade-right">
                <Map />
                <p className="map-label">
                    <span className="dot" />– {t('mapFaq.mapLabel')}
                </p>
            </div>

            {/* RIGHT: FAQ accordion */}
            <div className="faq-side" data-aos="fade-left">
                <div className="faq-heading">
                    <h2>{t('mapFaq.heading')} <strong>{t('mapFaq.headingStrong')}</strong></h2>
                    <p>{t('mapFaq.sub')}</p>
                </div>
                <div className="faq-divider" />

                <div className="faq-list">
                    {faqs.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div className="faq-item" key={i}>
                                <button
                                    className="faq-question"
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.q}</span>
                                    <span className={`faq-icon${isOpen ? ' open' : ''}`}>+</span>
                                </button>
                                <div className={`faq-answer${isOpen ? ' open' : ''}`}>
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default MapFaq;
