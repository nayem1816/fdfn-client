import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const [getProduct, setGetProduct] = React.useState([]);
    const [error, setError] = React.useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        var formData = new FormData();
        formData.append('productName', data.productName);
        formData.append('productPrice', data.productPrice);
        formData.append('productDescription', data.productDescription);
        formData.append(
            'image',
            data.productImage[0],
            data.productImage[0].name
        );

        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow',
        };

        fetch(
            'https://fdfn-server.fdfn.net/api/v1/createProduct',
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                setGetProduct(result);
                toast.success('Product Added Successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // refresh page
                window.location.reload();
            })
            .catch((error) => {
                setError(error);
                toast.error('Something went wrong', {
                    position: 'top-right',
                    autoClose: 1000,
                });
            });
    };

    if (error) {
        toast.error('Product not added');
    }
    if (getProduct) {
        console.log(getProduct);
    }
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
                    <input
                        {...register('productImage', { required: true })}
                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                    />
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

export default AddProducts;
