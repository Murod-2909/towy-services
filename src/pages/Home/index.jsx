import React from 'react';
import Hero, {InfoBar} from "../../components/Hero";
import Offer from "../../components/Offer";
import Stats from "../../components/Stats";
import Services from "../../components/Services";
import JoinQuote from "../../components/JoinQuote";
import joinImg from "../../assets/image/quote.jpg"
import BlogCarousel from "../../components/BlogCarousel";
import MapFaq from "../../components/MapFaq";
const Home = () => {
    return (
        <div>
            <Hero/>
            <InfoBar/>
            <Offer/>
            <Stats/>
            <Services/>
            <JoinQuote joinBg={joinImg} quoteBg={joinImg}/>
            <BlogCarousel/>
            <MapFaq/>
            Home pages
        </div>
    );
};

export default Home;