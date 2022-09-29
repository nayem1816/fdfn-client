import React from 'react';
import contact from '../../../assets/images/contact_us.png';

const ContactText = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-10 mx-2">
            <div className="">
                <h2 className="" style={{ fontSize: '58px' }}>
                    Need any Help? Connect with our NOC
                </h2>
                <p className="mt-5">
                    Feel free to talk to our customer care representative at any
                    time using below contact information.
                </p>
            </div>
            <div className="flex justify-center">
                <img className="img-fluid" src={contact} alt="#" />
            </div>
        </div>
    );
};

export default ContactText;
