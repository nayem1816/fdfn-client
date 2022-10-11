import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../../../redux/features/dataSlice';
import { toast } from 'react-toastify';

const ManageNotification = () => {
    const { data, loading, error } = useSelector((state) => state.dataReducer);
    let count = 1;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData('readNotification'));
    }, [dispatch]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        console.log(error);
    }
    if (data) {
        console.log(data);
    }

    const handleDelete = (id) => {
        axios
            .post(
                `https://fdfn-server-v2.vercel.app/api/v1/deleteNotification`,
                {
                    id: id,
                }
            )
            .then(function (response) {
                toast.success('Notification deleted successfully', {
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
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Text
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data?.map((notification) => (
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {count++}
                                </th>
                                <td className="py-4 px-6">
                                    <p className="text-justify">
                                        {notification.notificationText}
                                    </p>
                                </td>
                                <td className="py-4 px-6 gap-3">
                                    <button
                                        onClick={() =>
                                            handleDelete(notification?._id)
                                        }
                                        type="button"
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageNotification;
