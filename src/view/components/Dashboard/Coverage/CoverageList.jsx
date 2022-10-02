import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const CoverageList = ({ coverage, count }) => {
    const handleDelete = (id) => {
        axios
            .post(`http://localhost:5000/api/v1/deleteCoverage`, {
                id: id,
            })
            .then(function (response) {
                toast.success('Delete Successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
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
            <td className="py-4 px-6">{coverage?.coverageName}</td>
            <td className="py-4 px-6 gap-3">
                <button
                    onClick={() => handleDelete(coverage?._id)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default CoverageList;
