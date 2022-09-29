import React from 'react';
import aboutUs2 from '../../../assets/images/about-us2.png';

const AboutFdfn = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  items-center my-10 mx-2">
            <div className="">
                <h2 style={{ fontSize: '48px' }} className="">
                    Why <span className="text-red">FDFN</span> Different From
                    Others
                </h2>
                <p className="text-justify">
                    FDFN has built it’s widely network utilizing by its licensed
                    spectrum from BTRC. Its network today is based on fiber
                    optics and point to point radio connection technology to
                    serve many of large corporate companies and Small and Medium
                    Enterprises.. FDFN offers a complete range of connectivity &
                    system integration solutions/services such as High Speed
                    Internet, Bandwidth on Demand, Data Storage & Security.
                </p>
            </div>
            <div className="flex justify-center">
                <img className="" src={aboutUs2} alt="#" />
            </div>
        </div>
    );
};

export default AboutFdfn;
