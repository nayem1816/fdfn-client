import * as React from 'react';
import './Header.css';
import logo from '../../../../assets/icons/fdfn-logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.config';
import User from './User';
import { Link } from 'react-router-dom';

const pages = [
    { id: 1, name: 'Home', link: 'home' },
    { id: 2, name: 'Pay bill', link: 'payBill' },
    { id: 3, name: 'Packages', link: 'packages' },
    { id: 4, name: 'FTP Site', link: 'ftpSite' },
    { id: 5, name: 'Live Tv', link: 'liveTv' },
    // { id: 6, name: 'Movies', link: 'movies' },
    { id: 7, name: 'Coverages', link: 'coverage' },
    { id: 8, name: 'Contact', link: 'contact' },
    { id: 9, name: 'About', link: 'about' },
];

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [user, loading, error] = useAuthState(auth);

    const handleMenu = () => {
        setOpen(!open);
    };

    if (error) return <p>Error: {error.message}</p>;

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between mx-auto">
                <a href="/" className="flex">
                    <img
                        src={logo}
                        className="mr-3 h-12 sm:h-16"
                        alt="FDFN Logo"
                    />
                </a>
                <button
                    onClick={() => handleMenu()}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`${
                        open === true ? 'block' : 'hidden'
                    } w-full lg:block lg:w-auto`}
                    id="navbar-default"
                >
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:space-x-4 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        {pages.map((page) => (
                            <li key={page.id} className="mt-2 md:mt-0">
                                <Link
                                    to={`/${page.link}`}
                                    className="block px-2 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 hover:text-red-600"
                                >
                                    {page.name}
                                </Link>
                            </li>
                        ))}
                        {user ? (
                            loading ? (
                                <Link
                                    to="/login"
                                    className="block px-2 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 hover:text-red-600"
                                >
                                    Login
                                </Link>
                            ) : (
                                <li className="mt-2 md:mt-0">
                                    <User />
                                </li>
                            )
                        ) : (
                            <li className="mt-2 md:mt-0">
                                <Link
                                    to="/login"
                                    className="block px-2 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 hover:text-red-600"
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
