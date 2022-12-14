import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { VscUngroupByRefType } from 'react-icons/vsc';
import { MdDateRange } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.config';

const AdminListDetails = ({ admin, count }) => {
    const [user] = useAuthState(auth);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    // const [isModerator, setIsModerator] = React.useState(false);

    const handleUpdate = () => {
        setShowModal(true);
    };

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

        // fetch(`https://fdfn-server-v2.vercel.app/api/v1/isModerator?email=${user.email}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data?.data?.adminEmail === user.email) {
        //             setIsModerator(true);
        //             console.log('Moderator');
        //         }
        //     });
    }, [user.email]);

    const handleDelete = (id, adminRole) => {
        axios
            .post(`https://fdfn-server-v2.vercel.app/api/v1/deleteAdmin`, {
                id: id,
                adminRole: adminRole,
            })
            .then(function (response) {
                toast.success('Admin deleted successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                window.location.reload();
            })
            .catch(function (error) {
                toast.error(error.response.data.message, {
                    position: 'top-right',
                    autoClose: 1000,
                });
            });
    };
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {count}
            </th>
            <td className="py-4 px-6">{admin?.adminEmail}</td>
            <td className="py-4 px-6">{admin?.adminRole}</td>
            <td className="py-4 px-6 gap-3">
                <button
                    onClick={() => handleUpdate()}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Details
                </button>
                <div
                    id="defaultModal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className={`${
                        showModal === true ? 'block' : 'hidden'
                    } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center`}
                >
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Moderator Information
                                </h3>
                                <button
                                    onClick={() => setShowModal(false)}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="defaultModal"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="md:w-full lg:w-2/3 my-5">
                                    <div className="email mb-6">
                                        <label
                                            htmlFor="input-group-1"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {admin.adminRole}'s Email
                                        </label>
                                        <div className="relative">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                id="input-group-1"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={admin?.adminEmail}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="email mb-6">
                                        <label
                                            htmlFor="input-group-2"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Created Date and Time
                                        </label>
                                        <div className="relative">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <MdDateRange className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="input-group-2"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={admin?.adminCreateDate}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="email mb-6">
                                        <label
                                            htmlFor="input-group-3"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Admin Type
                                        </label>
                                        <div className="relative">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <VscUngroupByRefType className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="input-group-3"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={admin?.adminRole}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isAdmin === true && admin.adminRole !== 'Admin' && (
                    <button
                        onClick={() => handleDelete(admin?._id)}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Delete
                    </button>
                )}
            </td>
        </tr>
    );
};

export default AdminListDetails;
