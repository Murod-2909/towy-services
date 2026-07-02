import { Link } from "react-router-dom";
import "./yellowBanner.scss";
import gearPattern from "../../assets/image/gear-pattern.svg";

function YellowBanner({ title }) {
    return (
        <section
            className="yellow-banner"
            style={{ backgroundImage: `url(${gearPattern})` }}
        >
            <div className="container yellow-banner__content">
                <h1>{title}</h1>
                <nav className="yellow-banner__breadcrumb" aria-label="Breadcrumb">
                    <Link to="/">Home</Link>
                    <span aria-hidden="true">/</span>
                    <span>{title}</span>
                </nav>
            </div>
        </section>
    );
}

export default YellowBanner;
