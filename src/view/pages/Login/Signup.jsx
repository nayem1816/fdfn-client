import React from 'react';
import GoogleLogin from './GoogleLogin';
import { useForm } from 'react-hook-form';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from './../../../firebase.config';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    const navigate = useNavigate();
    const location = useLocation();

    if (loading || updating) {
        console.log(loading);
    }
    if (error || Uerror) {
        toast.error('Please try again', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    let from = location.state?.from?.pathname || '/';
    if (user) {
        // const userData = {
        //     fullName: user.displayName,
        //     email: user.user.email,
        // };

        // // console.log(user.user.email);
        // // console.log(user.user.displayName);

        // var requestOptions = {
        //     method: 'POST',
        //     body: userData,
        //     redirect: 'follow',
        // };

        // fetch('https://fdfn-server-v2.vercel.app/api/v1/profile', requestOptions)
        //     .then((response) => response.text())
        //     .then((result) => {
        //         console.log(result);
        //     })
        //     .catch((error) => console.log('error', error));

        navigate(from, { replace: true });
        // reload the page
        window.location.reload();
    }

    return (
        <div className="">
            <div className="p-4 w-full max-w-lg bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 container mx-auto">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Create new account
                    </h5>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your name
                        </label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your password
                        </label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sign up
                    </button>
                </form>
                <div className="inline-flex justify-center items-center w-full">
                    <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
                        or
                    </span>
                </div>
                {/* google button */}
                <div className="google-login text-center">
                    <GoogleLogin />
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-5 text-center">
                    Are you registered?{' '}
                    <a
                        href="/login"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                        go to login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
