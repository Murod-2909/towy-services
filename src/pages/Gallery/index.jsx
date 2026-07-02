import { useState } from "react";
import { useTranslation } from "react-i18next";
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

const PHOTO_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

function Gallery() {
    const { t } = useTranslation();
    const photos = t("gallery.photos", { returnObjects: true }).map((p, i) => ({
        id: i,
        src: PHOTO_IMAGES[i],
        title: p.title,
        caption: p.caption,
    }));

    const [active, setActive] = useState(null);

    return (
        <div>
            <PageBanner
                title={t("gallery.bannerTitle")}
                subtitle={t("gallery.pageSubtitle")}
            />

            <section className="gallery-section">
                <div className="container">
                    <div className="gallery-grid">
                        {photos.map((photo, i) => (
                            <article
                                className="gallery-card"
                                key={photo.id}
                                data-aos="fade-up"
                                data-aos-delay={(i % 2) * 100}
                            >
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
