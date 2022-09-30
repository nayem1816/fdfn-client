import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateAdmin from './UpdateAdmin';
import { fetchAdmin } from './../../../../redux/features/adminSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminList = () => {
    const { data, loading, error } = useSelector((state) => state.adminReducer);
    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdmin('readAdmins'));
    }, [dispatch]);

    let count = 1;

    const handleUpdate = () => {
        setShowModal(true);
    };

    const handleDelete = (id, adminRole) => {
        axios
            .post(`http://localhost:5000/api/v1/deleteAdmin`, {
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
    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        console.log(error);
    }
    if (data) {
        console.log(data);
    }

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
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Role
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data?.map((admin) => (
                            <tr
                                key={admin?._id}
                                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {count++}
                                </th>
                                <td className="py-4 px-6">
                                    {admin?.adminEmail}
                                </td>
                                <td className="py-4 px-6">
                                    {admin?.adminRole}
                                </td>
                                {admin?.adminRole !== 'Admin' && (
                                    <td className="py-4 px-6 gap-3">
                                        <button
                                            onClick={() => handleUpdate()}
                                            type="button"
                                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            Edit
                                        </button>
                                        <UpdateAdmin
                                            showModal={showModal}
                                            setShowModal={setShowModal}
                                            admin={admin}
                                        />

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    admin?._id,
                                                    admin?.adminRole
                                                )
                                            }
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminList;
