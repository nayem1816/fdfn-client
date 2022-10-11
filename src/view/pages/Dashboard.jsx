import React, { useEffect, useState } from 'react';
import Sidebar from './../components/Dashboard/Sidebar/Sidebar';
import DashboardHeader from './../components/Dashboard/DashboardHeader/DashboardHeader';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.config';

const Dashboard = () => {
    const [sidebarMenu, setSidebarMenu] = useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isModerator, setIsModerator] = React.useState(false);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        fetch(
            `https://fdfn-server-v2.vercel.app/api/v1/isAdmin?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.data?.adminEmail === user.email) {
                    setIsAdmin(true);
                }
            });

        fetch(
            `https://fdfn-server-v2.vercel.app/api/v1/isModerator?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.data?.adminEmail === user.email) {
                    setIsModerator(true);
                }
            });
    }, [user.email]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isAdmin === true || isModerator === true ? (
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
            ) : (
                <div className="text-center my-5">
                    <h1 className="text-center text-2xl font-bold">
                        You are not authorized to access this page.
                    </h1>
                    <a
                        href="/"
                        className="underline text-xl my-10 text-red-600"
                    >
                        Go to home page
                    </a>
                </div>
            )}
        </>
    );
};

export default Dashboard;
