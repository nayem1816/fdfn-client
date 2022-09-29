import React from 'react';
import DashboardCard from './../DashboardCard/DashboardCard';

const DashboardHome = () => {
    return (
        <>
            {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
            ].map((item, index) => (
                <DashboardCard key={index} />
            ))}
        </>
    );
};

export default DashboardHome;
