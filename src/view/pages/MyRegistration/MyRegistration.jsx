import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config';

const MyRegistration = () => {
    const [regData, setRegData] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        axios
            .get(
                'https://fdfn-server-v2.vercel.app/api/v1/readRegPackageByEmail/?email=' +
                    user?.email
            )
            .then((res) => {
                setRegData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user?.email]);

    return (
        <div>
            <div className="py-5 mb-5 bg-red-600">
                <h2 className="text-white text-2xl text-center underline">
                    My Registration
                </h2>
            </div>
            <div className="details container mx-auto">
                {regData.map((data) => (
                    <div className="gap-3 my-16 grid grid-cols-1 lg:grid-cols-2">
                        <div className=" mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Subscriber Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={data?.subscriberName}
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
                                    defaultValue={data?.authorizedName}
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
                                    defaultValue={data?.email}
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
                                    defaultValue={data?.contactNumber}
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
                                    defaultValue={data?.address}
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
                                    defaultValue={data?.packageName}
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
                                    defaultValue={data?.totalMb}
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
                                    defaultValue={data?.price}
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
                                    defaultValue={data?.nationalId}
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
                                    defaultValue={data?.dateOfBirth}
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
                                    defaultValue={data?.gender}
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
                                    defaultValue={data?.occupation}
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
                                    defaultValue={data?.fatherName}
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
                                    defaultValue={data?.motherName}
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
                                    defaultValue={data?.createRegDate}
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
                                    style={{ height: '170px', width: '140px' }}
                                    className="img-fluid"
                                    src={`https://${data?.yourPhoto}`}
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
                                    style={{ height: '120px', width: '200px' }}
                                    className="img-fluid"
                                    src={`https://${data?.nidFront}`}
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
                                    style={{ height: '120px', width: '200px' }}
                                    className="img-fluid"
                                    src={`https://${data?.nidBack}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyRegistration;
