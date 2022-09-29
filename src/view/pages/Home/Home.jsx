import React from 'react';
import ExtraFeatures from '../../components/Home/ExtraFeatures/ExtraFeatures';
import HomeBanner from '../../components/Home/HomeBanner/HomeBanner';
import HomeContact from '../../components/Home/HomeContact/HomeContact';
import HomePackages from '../../components/Home/HomePackages/HomePackages';
import WhyFdfn from '../../components/Home/WhyFdfn/WhyFdfn';
import Products from '../../components/Products/Products';
import TeamMember from '../../components/TeamMember/TeamMember';
import AboutFdfn from './../../components/Home/AboutFdfn/AboutFdfn';
import OurServices from './../../components/Home/OurServices/OurServices';
import Testimonial from './../../components/Home/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <WhyFdfn />
            <HomePackages />
            <ExtraFeatures />
            <Products />
            <AboutFdfn />
            <OurServices />
            <Testimonial />
            <TeamMember />
            <HomeContact />
        </div>
    );
};

export default Home;
