import PageBanner from "../../components/PageBanner";
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

function Blog() {
    return (
        <div>
            <PageBanner
                title="Our Blog"
                subtitle="Towing tips, safety guides and news from the 24/7 Towy team."
            />

            <section className="blog-page">
                <div className="container">
                    <div className="blog-page__grid">
                        {POSTS.map((post) => (
                            <article className="blog-page__card" key={post.id}>
                                <div className="blog-page__img">
                                    <img src={post.img} alt={post.title} loading="lazy" />
                                </div>
                                <div className="blog-page__body">
                                    <span className="blog-page__date">{post.date}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blog;
