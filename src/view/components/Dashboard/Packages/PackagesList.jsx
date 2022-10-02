import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PackagesList = ({ pack, count }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [editInput, setEditInput] = React.useState(true);

    const handleUpdate = () => {
        setShowModal(true);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        const packageData = {
            id: pack._id,
            packageType: data.packageType,
            packageName: data.packageName,
            totalMb: data.totalMb,
            packagePrice: data.packagePrice,
            feature1: data.feature1,
            feature2: data.feature2,
            feature3: data.feature3,
            feature4: data.feature4,
        };

        axios
            .post(`http://localhost:5000/api/v1/updatePackage`, {
                ...packageData,
            })
            .then(function (response) {
                console.log(response);
                toast.success('Package updated successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // reload page
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
                toast.error('Package not updated', {
                    position: 'top-right',
                    autoClose: 1000,
                });
            });
    };

    const handleDelete = (id) => {
        axios
            .post(`http://localhost:5000/api/v1/deletePackage`, {
                id: id,
            })
            .then(function (response) {
                toast.success('Package deleted successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // reload page
                window.location.reload();
            })
            .catch(function (error) {
                toast.error('Something went wrong', {
                    position: 'top-right',
                    autoClose: 1000,
                });
            });
    };

    const handleEdit = () => {
        setEditInput(false);
    };
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {count}
            </th>
            <td className="py-4 px-6">{pack?.packageType}</td>
            <td className="py-4 px-6">{pack?.packageName}</td>
            <td className="py-4 px-6">{pack?.totalMb}</td>
            <td className="py-4 px-6">{pack?.price}</td>
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
                    } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center`}
                >
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit Package
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

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-6 space-y-6">
                                    <div className="w-full">
                                        <div className="gap-3 my-16 grid grid-cols-1">
                                            <div className="totalMb mb-6">
                                                <label
                                                    htmlFor="input-group-1"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Package Type
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register(
                                                            'packageType',
                                                            { required: true }
                                                        )}
                                                        type="text"
                                                        id="input-group-1"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.packageType
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="Price mb-6">
                                                <label
                                                    htmlFor="input-group-2"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Package Name
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register(
                                                            'packageName',
                                                            { required: true }
                                                        )}
                                                        type="text"
                                                        id="input-group-2"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.packageName
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="Price mb-6">
                                                <label
                                                    htmlFor="input-group-2"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Total Mb
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register(
                                                            'totalMb',
                                                            { required: true }
                                                        )}
                                                        type="text"
                                                        id="input-group-2"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.totalMb
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="Price mb-6">
                                                <label
                                                    htmlFor="input-group-2"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Package Price
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register('price', {
                                                            required: true,
                                                        })}
                                                        type="text"
                                                        id="input-group-2"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.price
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="Price mb-6">
                                                <label
                                                    htmlFor="input-group-2"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Feature 1
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register(
                                                            'feature1',
                                                            { required: true }
                                                        )}
                                                        type="text"
                                                        id="input-group-2"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.feature1
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="Price mb-6">
                                                <label
                                                    htmlFor="input-group-2"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Feature 2
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register(
                                                            'feature2',
                                                            { required: true }
                                                        )}
                                                        type="text"
                                                        id="input-group-2"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.feature1
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="Price mb-6">
                                                <label
                                                    htmlFor="input-group-2"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Feature 3
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register(
                                                            'feature3',
                                                            { required: true }
                                                        )}
                                                        type="text"
                                                        id="input-group-2"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.feature3
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="Price mb-6">
                                                <label
                                                    htmlFor="input-group-2"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Feature 4
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        {...register(
                                                            'feature4',
                                                            { required: true }
                                                        )}
                                                        type="text"
                                                        id="input-group-2"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        defaultValue={
                                                            pack?.feature4
                                                        }
                                                        disabled={editInput}
                                                    />
                                                </div>
                                            </div>

                                            <div className="submit-btn">
                                                {editInput === false && (
                                                    <button
                                                        type="submit"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    >
                                                        Update Product
                                                    </button>
                                                )}
                                                {editInput === true && (
                                                    <button
                                                        onClick={() =>
                                                            handleEdit()
                                                        }
                                                        type="button"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    >
                                                        Edit Product
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => handleDelete(pack?._id)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default PackagesList;
