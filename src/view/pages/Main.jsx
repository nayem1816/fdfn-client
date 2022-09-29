import React from 'react';
import Header from './../components/Common/Header/Header';
import Footer from './../components/Common/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Outlet />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
};

export default Main;
