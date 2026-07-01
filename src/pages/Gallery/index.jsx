import { useState } from "react";
import PageBanner from "../../components/PageBanner";
import "./gallery.scss";

import img1 from "../../assets/image/gallery-1.svg";
import img2 from "../../assets/image/gallery-2.svg";
import img3 from "../../assets/image/gallery-3.svg";
import img4 from "../../assets/image/gallery-4.svg";
import img5 from "../../assets/image/gallery-5.svg";
import img6 from "../../assets/image/gallery-6.svg";
import img7 from "../../assets/image/gallery-7.svg";
import img8 from "../../assets/image/gallery-8.svg";

const PHOTOS = [
    { id: 1, src: img1, alt: "Flatbed towing on a sunny highway" },
    { id: 2, src: img2, alt: "Night emergency response with beacon lights" },
    { id: 3, src: img3, alt: "Motorcycle towing" },
    { id: 4, src: img4, alt: "Winter roadside assistance" },
    { id: 5, src: img5, alt: "City street towing" },
    { id: 6, src: img6, alt: "Accident recovery" },
    { id: 7, src: img7, alt: "Our towing crew" },
    { id: 8, src: img8, alt: "24/7 dispatch center" },
];

function Gallery() {
    const [active, setActive] = useState(null);

    return (
        <div>
            <PageBanner
                title="Gallery"
                subtitle="A look at our trucks, crew and roadside rescues in action."
            />

            <section className="gallery-section">
                <div className="container">
                    <div className="gallery-grid">
                        {PHOTOS.map((photo) => (
                            <button
                                key={photo.id}
                                type="button"
                                className="gallery-item"
                                onClick={() => setActive(photo)}
                            >
                                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                                <span className="gallery-item__zoom" aria-hidden="true">+</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {active && (
                <div
                    className="gallery-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={active.alt}
                    onClick={() => setActive(null)}
                >
                    <button
                        type="button"
                        className="gallery-lightbox__close"
                        onClick={() => setActive(null)}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <img src={active.src} alt={active.alt} onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}

export default Gallery;
