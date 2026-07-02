import YellowBanner from "../../components/YellowBanner";
import { SOCIAL_LINKS } from "../../components/icons";
import "./blog.scss";

import img1 from "../../assets/image/gallery-1.svg";
import img2 from "../../assets/image/gallery-2.svg";
import img3 from "../../assets/image/gallery-3.svg";
import img4 from "../../assets/image/gallery-4.svg";
import img5 from "../../assets/image/gallery-5.svg";
import img6 from "../../assets/image/gallery-8.svg";

const POSTS = [
    {
        id: 1,
        img: img1,
        date: "12 Jun 2026",
        title: "Fast Response Towing Service",
        excerpt: "Our team is available 24/7 to help you get back on the road as quickly as possible.",
    },
    {
        id: 2,
        img: img2,
        date: "28 May 2026",
        title: "Emergency Roadside Assistance",
        excerpt: "Flat tire, dead battery, or locked out? We have you covered anywhere, anytime.",
    },
    {
        id: 3,
        img: img3,
        date: "9 May 2026",
        title: "What To Do Right After An Accident",
        excerpt: "A short checklist of the first steps that keep you safe and make the tow and claim smoother.",
    },
    {
        id: 4,
        img: img4,
        date: "22 Apr 2026",
        title: "Choosing The Right Towing Method",
        excerpt: "Flatbed, wheel-lift or dolly — how we decide which method keeps your vehicle safest.",
    },
    {
        id: 5,
        img: img5,
        date: "3 Apr 2026",
        title: "Winter Driving: Avoiding A Breakdown",
        excerpt: "Simple maintenance checks that dramatically cut your odds of needing a tow this winter.",
    },
    {
        id: 6,
        img: img6,
        date: "15 Mar 2026",
        title: "How Insurance Towing Claims Work",
        excerpt: "What documentation you need and how we coordinate directly with your insurance provider.",
    },
];

const CATEGORIES = ["Towing Tips", "Safety", "Insurance", "Company News", "Winter Driving"];
const ARCHIVES = ["July 2026", "June 2026", "May 2026", "April 2026", "March 2026"];

function QuoteIcon() {
    return (
        <svg width="34" height="26" viewBox="0 0 34 26" fill="currentColor">
            <path d="M0 26V15.6C0 6.9 4.9 1.4 13 0l1.6 3.7C9.6 5 7 8 7 12h6.5v14H0zm18.7 0V15.6c0-8.7 4.9-14.2 13-15.6l1.6 3.7c-5 1.3-7.6 4.3-7.6 8.3H32v14H18.7z" />
        </svg>
    );
}

function Blog() {
    const [featured1, featured2, featured3, ...rest] = POSTS;
    const topPosts = [featured1, featured2, featured3];

    return (
        <div>
            <YellowBanner title="Blog" />

            <section className="blog-top">
                <div className="container">
                    <span className="blog-top__label">Top Post</span>
                    <div className="blog-top__grid">
                        {topPosts.map((post) => (
                            <article className="blog-top__card" key={post.id}>
                                <div className="blog-top__img">
                                    <img src={post.img} alt={post.title} loading="lazy" decoding="async" />
                                </div>
                                <h3>{post.title}</h3>
                                <span className="blog-top__date">{post.date}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-main">
                <div className="container blog-main__inner">
                    <div className="blog-main__list">
                        {rest.map((post) => (
                            <article className="blog-post" key={post.id}>
                                <div className="blog-post__img">
                                    <img src={post.img} alt={post.title} loading="lazy" decoding="async" />
                                </div>
                                <div className="blog-post__body">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <span className="blog-post__date">{post.date}</span>
                                </div>
                            </article>
                        ))}

                        <article className="blog-quote">
                            <span className="blog-quote__icon" aria-hidden="true">
                                <QuoteIcon />
                            </span>
                            <p>
                                "Our dispatch team gets a truck moving within minutes of every
                                call. That commitment to speed and honesty is what our drivers
                                are known for across the city."
                            </p>
                            <span className="blog-quote__author">Lulu Russell, Operations Director</span>
                        </article>

                        <nav className="blog-pagination" aria-label="Pagination">
                            <span className="blog-pagination__page is-active">1</span>
                        </nav>
                    </div>

                    <aside className="blog-sidebar">
                        <div className="blog-sidebar__widget">
                            <h4>Get In Touch</h4>
                            <div className="blog-sidebar__social">
                                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="blog-sidebar__widget">
                            <h4>Newsletter</h4>
                            <p>Subscribe to get our latest updates by email.</p>
                            <form
                                className="blog-sidebar__newsletter"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input type="email" required placeholder="Enter your email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>

                        <div className="blog-sidebar__widget">
                            <h4>Categories</h4>
                            <select defaultValue="">
                                <option value="" disabled>Select category</option>
                                {CATEGORIES.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <div className="blog-sidebar__widget">
                            <h4>Recent Posts</h4>
                            <ul className="blog-sidebar__posts">
                                {POSTS.slice(0, 3).map((post) => (
                                    <li key={post.id}>
                                        <img src={post.img} alt={post.title} loading="lazy" decoding="async" />
                                        <div>
                                            <span className="blog-sidebar__post-title">{post.title}</span>
                                            <span className="blog-sidebar__post-date">{post.date}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="blog-sidebar__widget">
                            <h4>Archives</h4>
                            <select defaultValue="">
                                <option value="" disabled>Select month</option>
                                {ARCHIVES.map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}

export default Blog;
