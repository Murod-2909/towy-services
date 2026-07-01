import React, { useState, useRef, useEffect } from 'react';
import './BlogCarousel.scss';

const POSTS = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        title: 'Post Status',
        excerpt: 'Shoulder flank turducken sirloin venison picanha corned beef pork.',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
        title: 'Corned Beef Pork Belly Brisket Tri-tip Rump Sausage',
        excerpt: 'Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback...',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80',
        title: 'Shoulder Salami Spare Ribs Doner Drumstick Tongue',
        excerpt: 'Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback...',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80',
        title: 'Fast Response Towing Service',
        excerpt: 'Our team is available 24/7 to help you get back on the road as quickly as possible.',
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=600&q=80',
        title: 'Emergency Roadside Assistance',
        excerpt: 'Flat tire, dead battery, or locked out? We have you covered anywhere, anytime.',
    },
];

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

const BlogCarousel = ({ posts = POSTS }) => {
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
            <div className="blog-header">
                <h2>Our <strong>Blog</strong></h2>
                <p>Anywhere, anytime towing</p>
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