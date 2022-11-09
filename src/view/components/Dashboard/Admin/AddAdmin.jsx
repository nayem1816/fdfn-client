import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import getFullDateAndTime from './../../../../services/getFullDateAndTime';
import { toast } from 'react-toastify';

const AddAdmin = () => {
    const [getAdmin, setGetAdmin] = React.useState({});
    const [error, setError] = React.useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let dateAndTime = getFullDateAndTime();

        const adminData = {
            adminEmail: data.adminEmail,
            adminRole: data.adminRole,
            adminCreateDate: dateAndTime,
        };

        axios
            .post('https://fdfn-server-v2.vercel.app/api/v1/createAdmin', {
                ...adminData,
            })
            .then(function (response) {
                setGetAdmin(response.data);
                setError(null);
                toast.success('Admin created successfully');
                // reload page
                window.location.reload();
            })
            .catch(function (error) {
                setGetAdmin({});
                setError(error);
            });
    };

    if (error) {
        toast.error('Admin not created');
    }
    if (getAdmin) {
        console.log(getAdmin);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:w-full lg:w-1/2 my-5">
                <div className="email mb-6">
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Enter new admin email
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
                            {...register('adminEmail', {
                                required: true,
                            })}
                            type="email"
                            id="input-group-1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@google.com"
                        />
                    </div>
                </div>
                <div className="adminType mb-6">
                    <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                        Admin Type
                    </label>
                    <select
                        {...register('adminRole', { required: true })}
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="Choose a Role">Choose a Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Moderator">Moderator</option>
                    </select>
                </div>
                <div className="submit-btn">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddAdmin;
