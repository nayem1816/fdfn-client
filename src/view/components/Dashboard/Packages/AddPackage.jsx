import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddPackage = () => {
    const [getPackages, setGetPackages] = React.useState([]);
    const [error, setError] = React.useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const packagesData = {
            packageType: data.packageType,
            packageName: data.packageName,
            totalMb: data.totalMb,
            price: data.price,
            feature1: data.feature1,
            feature2: data.feature2,
            feature3: data.feature3,
            feature4: data.feature4,
        };

        axios
            .post('https://fdfn-server-v2.vercel.app/api/v1/createPackage', {
                ...packagesData,
            })
            .then(function (response) {
                setGetPackages(response.data);
                setError(null);
                toast.success('Package created successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // reload page
                // window.location.reload();
            })
            .catch(function (error) {
                setGetPackages([]);
                setError(error);
            });
    };

    if (error) {
        toast.error('Package not created');
    }
    if (getPackages) {
        console.log(getPackages);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl">Add Packages</h2>
            <div className="gap-3 my-16 grid grid-cols-1 lg:grid-cols-2">
                <div className="packageType mb-6">
                    <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                        Package Type
                    </label>
                    <select
                        {...register('packageType', { required: true })}
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="Choose a type">Choose a type</option>
                        <option value="Govt.">Govt.</option>
                        <option value="Economy">Economy</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Corporate">Corporate</option>
                    </select>
                </div>
                <div className="name mb-6">
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Package Name
                    </label>
                    <div className="relative">
                        <input
                            {...register('packageName', { required: true })}
                            type="text"
                            id="input-group-1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Package Name"
                        />
                    </div>
                </div>
                <div className="totalMb mb-6">
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Total MB
                    </label>
                    <div className="relative">
                        <input
                            {...register('totalMb', { required: true })}
                            type="number"
                            id="input-group-1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="5"
                        />
                    </div>
                </div>
                <div className="Price mb-6">
                    <label
                        htmlFor="input-group-2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Price
                    </label>
                    <div className="relative">
                        <input
                            {...register('price', { required: true })}
                            type="text"
                            id="input-group-2"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="500"
                        />
                    </div>
                </div>
                <div className="feature1 mb-6">
                    <label
                        htmlFor="input-group-3"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Feature 1
                    </label>
                    <div className="relative">
                        <input
                            {...register('feature1', { required: true })}
                            type="text"
                            id="input-group-3"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write a feature"
                        />
                    </div>
                </div>
                <div className="feature2 mb-6">
                    <label
                        htmlFor="input-group-4"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Feature 2
                    </label>
                    <div className="relative">
                        <input
                            {...register('feature2', { required: true })}
                            type="text"
                            id="input-group-4"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write a feature"
                        />
                    </div>
                </div>
                <div className="feature3 mb-6">
                    <label
                        htmlFor="input-group-5"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Feature 3
                    </label>
                    <div className="relative">
                        <input
                            {...register('feature3', { required: true })}
                            type="text"
                            id="input-group-5"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write a feature"
                        />
                    </div>
                </div>
                <div className="feature4 mb-6">
                    <label
                        htmlFor="input-group-6"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Feature 4
                    </label>
                    <div className="relative">
                        <input
                            {...register('feature4', { required: true })}
                            type="text"
                            id="input-group-5"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write a feature"
                        />
                    </div>
                </div>
                <div className="submit-btn lg:col-span-2">
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

export default AddPackage;
