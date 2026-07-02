import { useState, useEffect } from 'react';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export const OFFICES = [
    { id: 1, lat: 41.2995, lng: 69.2401, city: "Toshkent" },
    { id: 2, lat: 39.6542, lng: 66.9597, city: "Samarqand" },
    { id: 3, lat: 40.1158, lng: 67.8422, city: "Jizzax" },
    { id: 4, lat: 40.3834, lng: 71.7853, city: "Farg'ona" },
    { id: 5, lat: 41.5500, lng: 60.6167, city: "Urganch" },
];

// ── Leaflet dinamik import (SSR-safe) ──
function Map({ minHeight = 460 }) {
    const [MapComponents, setMapComponents] = useState(null);

    useEffect(() => {
        // Leaflet faqat browser da ishlaydi
        Promise.all([
            import('leaflet'),
            import('react-leaflet'),
        ]).then(([L, RL]) => {
            // Default marker icon fix — bundled locally, no CDN dependency
            delete L.default.Icon.Default.prototype._getIconUrl;
            L.default.Icon.Default.mergeOptions({
                iconRetinaUrl: markerIcon2x,
                iconUrl: markerIcon,
                shadowUrl: markerShadow,
            });
            setMapComponents({ L: L.default, RL });
        });
    }, []);

    if (!MapComponents) {
        return (
            <div className="map-loading" style={{ minHeight }}>
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
            style={{ width: '100%', height: '100%', minHeight }}
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
}

export default Map;
