import React, { useState, useEffect } from 'react';
import './MapFaq.scss';

// ── Ofis nuqtalari — O'zbekiston shaharlari ──
const OFFICES = [
    { id: 1, lat: 41.2995,  lng: 69.2401,  city: 'Toshkent'  },
    { id: 2, lat: 39.6542,  lng: 66.9597,  city: 'Samarqand' },
    { id: 3, lat: 40.1158,  lng: 67.8422,  city: 'Jizzax'    },
    { id: 4, lat: 40.3834,  lng: 71.7853,  city: 'Farg\'ona'  },
    { id: 5, lat: 41.5500,  lng: 60.6167,  city: 'Urganch'   },
];

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

// ── Leaflet dinamik import (SSR-safe) ──
const LeafletMap = () => {
    const [MapComponents, setMapComponents] = useState(null);

    useEffect(() => {
        // Leaflet faqat browser da ishlaydi
        Promise.all([
            import('leaflet'),
            import('react-leaflet'),
        ]).then(([L, RL]) => {
            // Default marker icon fix
            delete L.default.Icon.Default.prototype._getIconUrl;
            L.default.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            });
            setMapComponents({ L: L.default, RL });
        });

        // Leaflet CSS
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }
    }, []);

    if (!MapComponents) {
        return (
            <div className="map-loading">
                <div className="map-spinner" />
            </div>
        );
    }

    const { L, RL: { MapContainer, TileLayer, Marker, Popup, ZoomControl } } = MapComponents;

    // Custom sariq marker icon
    const yellowIcon = new L.DivIcon({
        className: '',
        html: `<div style="
      width:16px;height:16px;
      background:#f5a800;
      border-radius:50%;
      border:3px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,0.35);
    "></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        popupAnchor: [0, -12],
    });

    return (
        <MapContainer
            center={[41.2, 63.0]}
            zoom={6}
            zoomControl={false}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%', minHeight: '460px' }}
        >
            {/* Ochiq, minimalist tile — WorldGrayCanvas */}
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                attribution=""
            />

            <ZoomControl position="topleft" />

            {OFFICES.map((o) => (
                <Marker key={o.id} position={[o.lat, o.lng]} icon={yellowIcon}>
                    <Popup>
                        <strong style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.95rem' }}>
                            {o.city}
                        </strong>
                        <br />
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>24/7 Towy Office</span>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

// ── Main component ──
const MapFaq = () => {
    const [openId, setOpenId] = useState(null);
    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="mapfaq-section">

            {/* LEFT: Leaflet map */}
            <div className="map-side">
                <LeafletMap />
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