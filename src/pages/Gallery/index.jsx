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
    {
        id: 1,
        src: img1,
        title: "Sunset Highway Recovery",
        caption: "A flatbed pickup on a quiet stretch of highway as the sun goes down.",
    },
    {
        id: 2,
        src: img2,
        title: "Night Emergency Response",
        caption: "Beacon lights on scene minutes after an overnight breakdown call.",
    },
    {
        id: 3,
        src: img3,
        title: "Motorcycle & Bike Transport",
        caption: "Specialized tie-downs keep two-wheeled vehicles secure in transit.",
    },
    {
        id: 4,
        src: img4,
        title: "Winter Roadside Rescue",
        caption: "Snow and ice don't slow us down — our trucks run every season.",
    },
    {
        id: 5,
        src: img5,
        title: "Downtown Towing",
        caption: "Navigating tight city streets to clear a vehicle safely.",
    },
    {
        id: 6,
        src: img6,
        title: "Accident Recovery",
        caption: "Fast, careful recovery to get the road clear and your car to the shop.",
    },
    {
        id: 7,
        src: img7,
        title: "Meet Our Crew",
        caption: "Licensed, insured drivers who treat every vehicle like their own.",
    },
    {
        id: 8,
        src: img8,
        title: "24/7 Dispatch Center",
        caption: "Our dispatch team routes the nearest truck the moment you call.",
    },
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
                            <article className="gallery-card" key={photo.id}>
                                <button
                                    type="button"
                                    className="gallery-card__img"
                                    onClick={() => setActive(photo)}
                                    aria-label={`View ${photo.title}`}
                                >
                                    <img src={photo.src} alt={photo.title} loading="lazy" decoding="async" />
                                    <span className="gallery-card__stripe" aria-hidden="true" />
                                </button>
                                <div className="gallery-card__body">
                                    <h3>{photo.title}</h3>
                                    <p>{photo.caption}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {active && (
                <div
                    className="gallery-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={active.title}
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
                    <img src={active.src} alt={active.title} onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}

export default Gallery;
