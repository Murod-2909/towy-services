import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './BlogCarousel.scss';

import img1 from '../../assets/image/counters.jpg';
import img2 from '../../assets/image/06-1.jpg';
import img3 from '../../assets/image/07-1.jpg';
import img4 from '../../assets/image/03-2.jpg';
import img5 from '../../assets/image/counters.jpg';

const POST_IMAGES = [img1, img2, img3, img4, img5];

const AUTO_INTERVAL = 3500; // ms
const GAP = 28;

function useVisibleCount() {
    const [count, setCount] = useState(3);
    useEffect(() => {
        const update = () => {
            if (window.innerWidth <= 560) setCount(1);
            else if (window.innerWidth <= 900) setCount(2);
            else setCount(3);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return count;
}

const BlogCarousel = () => {
    const { t } = useTranslation();
    const posts = t('blogCarousel.posts', { returnObjects: true }).map((p, i) => ({
        id: i,
        img: POST_IMAGES[i],
        title: p.title,
        excerpt: p.excerpt,
    }));

    const [index, setIndex] = useState(0);
    const visibleCount = useVisibleCount();
    const maxIndex = Math.max(0, posts.length - visibleCount);
    const dotCount = maxIndex + 1;

    const trackRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const isPaused = useRef(false);

    // Card width calculator
    useEffect(() => {
        if (!trackRef.current) return;
        const outer = trackRef.current.parentElement;
        const calc = () => {
            setCardWidth((outer.offsetWidth - GAP * (visibleCount - 1)) / visibleCount);
        };
        calc();
        const ro = new ResizeObserver(calc);
        ro.observe(outer);
        return () => ro.disconnect();
    }, [visibleCount]);

    // Keep index in bounds
    useEffect(() => {
        setIndex((i) => Math.min(i, maxIndex));
    }, [maxIndex]);

    // Auto carousel
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused.current) {
                setIndex((i) => (i >= maxIndex ? 0 : i + 1));
            }
        }, AUTO_INTERVAL);
        return () => clearInterval(timer);
    }, [maxIndex]);

    const translateX = index * (cardWidth + GAP);

    return (
        <section
            className="blog-section"
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
        >
            {/* Header */}
            <div className="blog-header" data-aos="fade-up">
                <h2>{t('blogCarousel.heading')} <strong>{t('blogCarousel.headingStrong')}</strong></h2>
                <p>{t('blogCarousel.sub')}</p>
                <div className="blog-divider" />
            </div>

            {/* Track */}
            <div className="blog-carousel-wrapper">
                <div className="blog-track-outer">
                    <div
                        className="blog-track"
                        ref={trackRef}
                        style={{ transform: `translateX(-${translateX}px)` }}
                    >
                        {posts.map((post) => (
                            <article className="blog-card" key={post.id}>
                                <div className="card-img">
                                    <img src={post.img} alt={post.title} loading="lazy" />
                                    <div className="card-stripe" />
                                </div>
                                <div className="card-body">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="carousel-dots">
                {Array.from({ length: dotCount }).map((_, i) => (
                    <button
                        key={i}
                        className={i === index ? 'active' : ''}
                        onClick={() => setIndex(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default BlogCarousel;
