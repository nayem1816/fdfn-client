import React from 'react';
import aboutUs1 from '../../../assets/images/about_us.png';

const AboutZone = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  items-center my-10 mx-2">
            <div className="">
                <h2 style={{ fontSize: '48px' }} className="">
                    About
                </h2>
                <h2 style={{ fontSize: '48px' }} className="text-red">
                    Friends Digital Fiber Network
                </h2>
            </div>
            <div className="">
                <img className="img-fluid" src={aboutUs1} alt="#" />
            </div>
        </div>
    );
};

export default AboutZone;
