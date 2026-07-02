import React, { useState } from 'react';
import './MapFaq.scss';
import Map from '../Map';

const FAQS = [
    {
        id: 1,
        q: 'How do I get my car back?',
        a: 'Contact our dispatch center with your vehicle information and tow receipt. We will guide you through the release process and let you know the required fees and documents.',
    },
    {
        id: 2,
        q: 'How long do I have to get my stuff?',
        a: 'You have up to 30 days to retrieve personal belongings from your vehicle. After that period, items may be disposed of in accordance with local regulations.',
    },
    {
        id: 3,
        q: 'Why did you tow my car?',
        a: 'Vehicles are towed for various reasons including illegal parking, blocking traffic, expired registration, or at the request of a property owner or law enforcement.',
    },
    {
        id: 4,
        q: 'What is a courtesy tow / tow by the hour?',
        a: 'A courtesy tow is a complimentary short-distance tow offered in certain situations. Tow by the hour means you pay only for the actual time our truck is in use for your job.',
    },
    {
        id: 5,
        q: 'Why is there a lien on my vehicle?',
        a: 'A lien is placed when storage and towing fees remain unpaid. This is a legal process that allows us to recover costs. Contact us to arrange payment and clear the lien.',
    },
];

// ── Main component ──
const MapFaq = () => {
    const [openId, setOpenId] = useState(null);
    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="mapfaq-section">

            {/* LEFT: Leaflet map */}
            <div className="map-side">
                <Map />
                <p className="map-label">
                    <span className="dot" />– Number of our offices
                </p>
            </div>

            {/* RIGHT: FAQ accordion */}
            <div className="faq-side">
                <div className="faq-heading">
                    <h2>General <strong>FAQ's</strong></h2>
                    <p>Relocation of any vehicle type</p>
                </div>
                <div className="faq-divider" />

                <div className="faq-list">
                    {FAQS.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div className="faq-item" key={item.id}>
                                <button
                                    className="faq-question"
                                    onClick={() => toggle(item.id)}
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
