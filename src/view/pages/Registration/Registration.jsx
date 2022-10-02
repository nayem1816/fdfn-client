import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addRegistration } from '../../../redux/features/registrationSlice';
import { toast } from 'react-toastify';

const Registration = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        toast.success('Registration Successful');

        navigate('/');

        // dispatch(addRegistration(data));
        // go to payment page

        // navigate(`/registration/paymentRegistration/${id}`);
    };

    return (
        <div>
            <div className="heading bg-red-600 p-10">
                <h1 className="text-center underline text-white text-2xl">
                    New Connection Registration
                </h1>
            </div>
            <div className="form my-5 container mx-auto">
                <h2 className="text-center text-xl">
                    Fill-up your information
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    <div class="mb-6">
                        <label
                            for="name1"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subscriber Name
                        </label>
                        <input
                            {...register('subscriberName', {
                                required: true,
                            })}
                            type="text"
                            id="name1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="name2"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Authorized Name
                        </label>
                        <input
                            {...register('authorizedName', {
                                required: true,
                            })}
                            type="text"
                            id="name2"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            {...register('email', {
                                required: true,
                            })}
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Contact Number
                        </label>
                        <input
                            {...register('contactNumber', {
                                required: true,
                            })}
                            type="number"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="nid"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            National Id Number
                        </label>
                        <input
                            {...register('nationalId', {
                                required: true,
                            })}
                            type="number"
                            id="nid"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="uploadFile mb-6">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="file_input1"
                        >
                            Your Photo
                        </label>
                        <input
                            {...register('yourPhoto', { required: true })}
                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input1"
                            type="file"
                        />
                    </div>
                    <div className="uploadFile mb-6">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="file_input1"
                        >
                            Nid Front Photo
                        </label>
                        <input
                            {...register('nidFront')}
                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input1"
                            type="file"
                        />
                    </div>
                    <div className="uploadFile mb-6">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="file_input3"
                        >
                            Nid Back Photo
                        </label>
                        <input
                            {...register('nidBack')}
                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input3"
                            type="file"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="birth"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Date Of Birth
                        </label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                {...register('dateOfBirth', {
                                    required: true,
                                })}
                                type="date"
                                id="birth"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date"
                            />
                        </div>
                    </div>
                    <div className=" mb-6">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Gender
                        </label>
                        <select
                            {...register('gender', { required: true })}
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="Choose a Role">
                                Choose your gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label
                            for="occupation"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Occupation
                        </label>
                        <input
                            {...register('occupation')}
                            type="text"
                            id="occupation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="fatherName"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Father Name
                        </label>
                        <input
                            {...register('fatherName')}
                            type="text"
                            id="fatherName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="motherName"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Mother Name
                        </label>
                        <input
                            {...register('motherName')}
                            type="text"
                            id="motherName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="googleLocationPinPoint"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Google Map Location Pin Point
                        </label>
                        <input
                            {...register('googleLocationPinPoint')}
                            type="text"
                            id="googleLocationPinPoint"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="address"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Address
                        </label>
                        <input
                            {...register('address')}
                            type="text"
                            id="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="submit-btn lg:col-span-2">
                        <button
                            // to={`/paymentRegistration/${id}`}
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
