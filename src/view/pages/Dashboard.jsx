import React, { useState } from 'react';
import Sidebar from './../components/Dashboard/Sidebar/Sidebar';
import DashboardHeader from './../components/Dashboard/DashboardHeader/DashboardHeader';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [sidebarMenu, setSidebarMenu] = useState(false);

    return (
        <div style={{ height: '100vh' }} className="flex">
            <div
                className={`h-full ${
                    sidebarMenu === false ? 'hidden' : 'block'
                } lg:block`}
            >
                <Sidebar />
            </div>
            <div className="w-full">
                <header className="py-5 flex px-3 bg-gray-50 dark:bg-gray-800 shadow-lg sticky top-0 z-50">
                    <DashboardHeader
                        sidebarMenu={sidebarMenu}
                        setSidebarMenu={setSidebarMenu}
                    />
                </header>
                <div className="container mx-auto body py-5 flex px-3 my-5 rounded w-full">
                    <div className="w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
