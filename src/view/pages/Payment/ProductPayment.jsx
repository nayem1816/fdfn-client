import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.config';

const ProductPayment = () => {
    const [user] = useAuthState(auth);
    const [productData, setProductData] = React.useState([]);
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/readProducts/${id}`)
            .then((res) => res.json())
            .then((data) => setProductData(data.data));
    }, [id]);

    return (
        <div>
            <div className="py-5 bg-red-600">
                <h2 className="text-white text-xl text-center underline">
                    Product Payment
                </h2>
            </div>
            <div className="payment-details container mx-auto my-10">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    <div class="mb-6">
                        <label
                            for="name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Enter your name
                        </label>
                        <input
                            type="name"
                            id="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={user?.displayName}
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Enter your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={user?.email}
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Enter your phone number
                        </label>
                        <input
                            type="number"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="+880"
                            {...register('phone', { required: true })}
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="address"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Enter your address
                        </label>
                        <input
                            type="text"
                            id="address"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your address"
                            {...register('address', { required: true })}
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="pdName"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your Product Name
                        </label>
                        <input
                            type="text"
                            id="pdName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={productData?.productName}
                            disabled
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="pdPrice"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your Total price
                        </label>
                        <input
                            type="text"
                            id="pdPrice"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={productData?.productPrice}
                            disabled
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductPayment;
