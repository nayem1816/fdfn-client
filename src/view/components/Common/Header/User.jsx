import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.config';

const User = () => {
    const [active, setActive] = React.useState(false);
    const [user] = useAuthState(auth);
    const handleBtn = () => {
        setActive(!active);
    };
    return (
        <div>
            <button
                onClick={() => handleBtn()}
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                class="flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
            >
                {user.displayName}
                <svg
                    class="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            <div
                id="dropdownInformation"
                class={`${
                    active === true ? 'block' : 'hidden'
                } z-10 w-44 bg-white rounded divide-y  divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute `}
            >
                <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div>{user.displayName}</div>
                    <div class="font-medium truncate">{user.email}</div>
                </div>
                <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformationButton"
                >
                    <li>
                        <a
                            href="/dashboard"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Orders
                        </a>
                    </li>
                </ul>
                <div class="py-1">
                    <a
                        onClick={() => auth.signOut()}
                        href="/"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Sign out
                    </a>
                </div>
            </div>
        </div>
    );
};

export default User;
