import { useTranslation } from "react-i18next";
import YellowBanner from "../../components/YellowBanner";
import { SOCIAL_LINKS } from "../../components/icons";
import "./blog.scss";

import img1 from "../../assets/image/gallery-1.svg";
import img2 from "../../assets/image/gallery-2.svg";
import img3 from "../../assets/image/gallery-3.svg";
import img4 from "../../assets/image/gallery-4.svg";
import img5 from "../../assets/image/gallery-5.svg";
import img6 from "../../assets/image/gallery-8.svg";

const POST_IMAGES = [img1, img2, img3, img4, img5, img6];
const POST_DATES = ["12 Jun 2026", "28 May 2026", "9 May 2026", "22 Apr 2026", "3 Apr 2026", "15 Mar 2026"];
const ARCHIVES = ["July 2026", "June 2026", "May 2026", "April 2026", "March 2026"];

function QuoteIcon() {
    return (
        <svg width="34" height="26" viewBox="0 0 34 26" fill="currentColor">
            <path d="M0 26V15.6C0 6.9 4.9 1.4 13 0l1.6 3.7C9.6 5 7 8 7 12h6.5v14H0zm18.7 0V15.6c0-8.7 4.9-14.2 13-15.6l1.6 3.7c-5 1.3-7.6 4.3-7.6 8.3H32v14H18.7z" />
        </svg>
    );
}

function Blog() {
    const { t } = useTranslation();
    const posts = t("blog.posts", { returnObjects: true }).map((p, i) => ({
        id: i,
        img: POST_IMAGES[i],
        date: POST_DATES[i],
        title: p.title,
        excerpt: p.excerpt,
    }));
    const categories = t("blog.categoryList", { returnObjects: true });

    const [featured1, featured2, featured3, ...rest] = posts;
    const topPosts = [featured1, featured2, featured3];

    return (
        <div>
            <YellowBanner title={t("blog.bannerTitle")} />

            <section className="blog-top">
                <div className="container">
                    <span className="blog-top__label">{t("blog.topPost")}</span>
                    <div className="blog-top__grid">
                        {topPosts.map((post, i) => (
                            <article
                                className="blog-top__card"
                                key={post.id}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
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
                            <article className="blog-post" key={post.id} data-aos="fade-up">
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

                        <article className="blog-quote" data-aos="fade-up">
                            <span className="blog-quote__icon" aria-hidden="true">
                                <QuoteIcon />
                            </span>
                            <p>{t("blog.quote")}</p>
                            <span className="blog-quote__author">{t("blog.quoteAuthor")}</span>
                        </article>

                        <nav className="blog-pagination" aria-label="Pagination">
                            <span className="blog-pagination__page is-active">1</span>
                        </nav>
                    </div>

                    <aside className="blog-sidebar" data-aos="fade-left">
                        <div className="blog-sidebar__widget">
                            <h4>{t("blog.getInTouch")}</h4>
                            <div className="blog-sidebar__social">
                                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="blog-sidebar__widget">
                            <h4>{t("blog.newsletter")}</h4>
                            <p>{t("blog.newsletterDesc")}</p>
                            <form
                                className="blog-sidebar__newsletter"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input type="email" required placeholder={t("blog.enterEmail")} />
                                <button type="submit">{t("common.subscribe")}</button>
                            </form>
                        </div>

                        <div className="blog-sidebar__widget">
                            <h4>{t("blog.categories")}</h4>
                            <select defaultValue="">
                                <option value="" disabled>{t("blog.selectCategory")}</option>
                                {categories.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <div className="blog-sidebar__widget">
                            <h4>{t("blog.recentPosts")}</h4>
                            <ul className="blog-sidebar__posts">
                                {posts.slice(0, 3).map((post) => (
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
                            <h4>{t("blog.archives")}</h4>
                            <select defaultValue="">
                                <option value="" disabled>{t("blog.selectMonth")}</option>
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
