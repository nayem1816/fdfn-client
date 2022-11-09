import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import getFullDateAndTime from '../../../../services/getFullDateAndTime';

const RegistrationList = ({ reg, count }) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleUpdate = () => {
        setShowModal(true);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const dateAndTime = getFullDateAndTime();

        const registrationUpdateData = {
            id: reg._id,
            status: data.status,
            updateRegDate: dateAndTime,
        };

        console.log(registrationUpdateData);

        axios
            .post(`https://fdfn-server-v2.vercel.app/api/v1/updateRegPackage`, {
                ...registrationUpdateData,
            })
            .then(function (response) {
                toast.success('Status updated successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // reload page
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
                toast.error('Status not updated', {
                    position: 'top-right',
                    autoClose: 1000,
                });
            });
    };

    const handleDelete = (id) => {
        axios
            .post(`https://fdfn-server-v2.vercel.app/api/v1/deleteRegPackage`, {
                id: id,
            })
            .then(function (response) {
                toast.success('User deleted successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // // reload page
                window.location.reload();
            })
            .catch(function (error) {
                toast.error('Something went wrong', {
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
            <td className="py-4 px-6">{reg?.subscriberName}</td>
            <td className="py-4 px-6">{reg?.contactNumber}</td>
            <td className="py-4 px-6">{reg?.packageName}</td>
            <td className="py-4 px-6">{reg?.totalMb}</td>
            <td className="py-4 px-6">{reg?.status}</td>
            <td className="py-4 px-6 gap-3">
                <button
                    onClick={() => handleUpdate()}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Details
                </button>
                <div
                    id="extralarge-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className={`${
                        showModal === true ? 'block' : 'hidden'
                    } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center`}
                >
                    <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit Registrations
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

                            <div className="update-status p-6">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Current Status
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={reg?.status}
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className="Price mb-6">
                                            <label
                                                htmlFor="status"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                            >
                                                Update Status
                                            </label>
                                            <select
                                                {...register('status', {
                                                    required: true,
                                                })}
                                                id="status"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option value="Choose a Role">
                                                    Choose Status
                                                </option>
                                                <option value="New">New</option>
                                                <option value="Pending">
                                                    Pending
                                                </option>
                                                <option value="Confirmed">
                                                    Confirmed
                                                </option>
                                                <option value="Rejected">
                                                    Rejected
                                                </option>
                                                <option value="On Going">
                                                    On Going
                                                </option>
                                                <option value="Delivered">
                                                    Delivered
                                                </option>
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
                            </div>

                            <div className="p-6">
                                <div className="w-full">
                                    <div className="gap-3 my-16 grid grid-cols-1 lg:grid-cols-2">
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Subscriber Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.subscriberName
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Authorized Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.authorizedName
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Email
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={reg?.email}
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Contact Number
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.contactNumber
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Address
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={reg?.address}
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Package Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.packageName
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Total Mb
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={reg?.totalMb}
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Price
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={reg?.price}
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                National Id
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.nationalId
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Date Of Birth
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.dateOfBirth
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Gender
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={reg?.gender}
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Occupation
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.occupation
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Father Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.fatherName
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Mother Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.motherName
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6 lg:col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Create Registration Date
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    defaultValue={
                                                        reg?.createRegDate
                                                    }
                                                    disabled={true}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                User Photo
                                            </label>
                                            <div className="relative">
                                                <img
                                                    className="img-fluid"
                                                    src={`${reg?.yourPhoto}`}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                User NID Front
                                            </label>
                                            <div className="relative">
                                                <img
                                                    className="img-fluid"
                                                    src={`${reg?.nidFront}`}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className=" mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                User NID Back
                                            </label>
                                            <div className="relative">
                                                <img
                                                    className="img-fluid"
                                                    src={`${reg?.nidBack}`}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => handleDelete(reg?._id)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default RegistrationList;
