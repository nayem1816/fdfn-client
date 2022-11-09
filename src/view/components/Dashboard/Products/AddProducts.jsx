import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import FileInput from '../../Common/Custom/FileInput/FileInput';

const AddProducts = () => {
    const [imageURL, setImageURL] = React.useState(null);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const bodyData = {
            productName: data.productName,
            productPrice: data.productPrice,
            productDescription: data.productDescription,
            image: imageURL,
        };

        fetch('https://fdfn-server-v2.vercel.app/api/v1/createProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        })
            .then((response) => response.json())
            .then((result) => {
                toast.success('Product Added Successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // refresh page
                window.location.reload();
            })
            .catch((error) => {
                toast.error('Something went wrong', {
                    position: 'top-right',
                    autoClose: 1000,
                });
            });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl">Admin</h2>
            <div className="gap-3 my-16 grid grid-cols-1 lg:grid-cols-2">
                <div className="totalMb mb-6">
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Product Name
                    </label>
                    <div className="relative">
                        <input
                            {...register('productName', { required: true })}
                            type="text"
                            id="input-group-1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Product Name"
                        />
                    </div>
                </div>
                <div className="uploadFile mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="file_input"
                    >
                        Upload Product Image
                    </label>
                    <FileInput setImageURL={setImageURL} />
                </div>
                <div className="Price mb-6">
                    <label
                        htmlFor="input-group-2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Product Price
                    </label>
                    <div className="relative">
                        <input
                            {...register('productPrice', { required: true })}
                            type="text"
                            id="input-group-2"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="500"
                        />
                    </div>
                </div>
                <div className="description mb-6 lg:col-span-2">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                        Product Description
                    </label>
                    <textarea
                        {...register('productDescription', { required: true })}
                        id="description"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Product description..."
                    ></textarea>
                </div>

                <div className="submit-btn lg:col-span-2">
                    <button
                        disabled={imageURL === null ? true : false}
                        type="submit"
                        className={`${
                            imageURL === null
                                ? 'bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded'
                                : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        }`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddProducts;
