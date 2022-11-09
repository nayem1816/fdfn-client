import React from 'react';
import eShopLogo from '../../../../assets/icons/fdfn-logo.png';
import auth from './../../../../firebase.config';
import {
    MdSpaceDashboard,
    MdShoppingCart,
    MdOutlineProductionQuantityLimits,
    MdSignalWifiStatusbarConnectedNoInternet4,
    MdVideoCall,
} from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import { GoPackage } from 'react-icons/go';
import { FaProductHunt, FaUsers, FaUsersCog } from 'react-icons/fa';
import { HiPrinter } from 'react-icons/hi';
import { IoVideocam } from 'react-icons/io5';
import { VscDebugCoverage } from 'react-icons/vsc';
import { SiCoveralls } from 'react-icons/si';
import { Link } from 'react-router-dom';

const sidebarMenu = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <MdSpaceDashboard />,
        link: '/dashboard',
    },
    {
        id: 2,
        title: 'Bills',
        icon: <MdSpaceDashboard />,
        link: '/dashboard/bills',
    },
    {
        id: 3,
        title: 'Admin',
        icon: <MdSpaceDashboard />,
        link: '/dashboard/admin',
    },
    {
        id: 4,
        title: 'Orders',
        icon: <MdShoppingCart />,
        link: '/dashboard/orders',
    },
    {
        id: 20,
        title: 'Registrations',
        icon: <MdOutlineProductionQuantityLimits />,
        link: '/dashboard/registrations',
    },
    {
        id: 5,
        title: 'Add Package',
        icon: <FiPackage />,
        link: '/dashboard/addPackage',
    },
    {
        id: 6,
        title: 'Manage Package',
        icon: <GoPackage />,
        link: '/dashboard/managePackage',
    },
    {
        id: 7,
        title: 'Add Product',
        icon: <MdOutlineProductionQuantityLimits />,
        link: '/dashboard/addProduct',
    },
    {
        id: 8,
        title: 'Manage Product',
        icon: <FaProductHunt />,
        link: '/dashboard/manageProduct',
    },
    {
        id: 9,
        title: 'Add Member',
        icon: <FaUsersCog />,
        link: '/dashboard/addMember',
    },
    {
        id: 10,
        title: 'Manage Member',
        icon: <FaUsers />,
        link: '/dashboard/manageMember',
    },
    {
        id: 11,
        title: 'Add FTP',
        icon: <HiPrinter />,
        link: '/dashboard/addFtp',
    },
    {
        id: 12,
        title: 'Manage FTP',
        icon: <MdSignalWifiStatusbarConnectedNoInternet4 />,
        link: '/dashboard/manageFtp',
    },
    {
        id: 13,
        title: 'Add Tv',
        icon: <IoVideocam />,
        link: '/dashboard/addTv',
    },
    {
        id: 14,
        title: 'Manage Tv',
        icon: <MdVideoCall />,
        link: '/dashboard/manageTv',
    },
    {
        id: 15,
        title: 'Add Coverage',
        icon: <SiCoveralls />,
        link: '/dashboard/addCoverage',
    },
    {
        id: 16,
        title: 'Manage Coverage',
        icon: <VscDebugCoverage />,
        link: '/dashboard/manageCoverage',
    },
    {
        id: 16,
        title: 'Notifications',
        icon: <FaUsers />,
        link: '/dashboard/notification',
    },
];

const Sidebar = () => {
    return (
        <aside className="w-64 h-full" aria-label="Sidebar">
            <div
                className={`overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-full shadow fixed w-64 z-50`}
            >
                <a
                    href="/"
                    className="flex items-center pl-2.5 mb-5 justify-center"
                >
                    <img src={eShopLogo} className="mr-3 h-16" alt="Logo" />
                </a>
                <ul className="space-y-3 my-10">
                    {sidebarMenu.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.link}
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <span className="flex items-center justify-center h-8 w-8 text-gray-500">
                                    {item.icon}
                                </span>

                                <span className="ml-3">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            onClick={() => auth.signOut()}
                            href="/"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="https://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                Sign Out
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
