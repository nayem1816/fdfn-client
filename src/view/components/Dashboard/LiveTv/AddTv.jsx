import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTv = () => {
    const [getTv, setGetTv] = React.useState([]);
    const [error, setError] = React.useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        var formData = new FormData();
        formData.append('channelName', data.tvName);
        formData.append('link', data.link);
        formData.append('image', data.image[0], data.image[0].name);

        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow',
        };

        fetch('https://fdfn-server.fdfn.net/api/v1/createTv', requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setGetTv(result);
                toast.success('Live Tv Added Successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                });
                // refresh page
                // window.location.reload();
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
        toast.error('Live Tv not added');
    }
    if (getTv) {
        console.log(getTv);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl">Add Live Tv</h2>
            <div className="gap-3 my-16 grid grid-cols-1 lg:grid-cols-2">
                <div className=" mb-6">
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Live Tv name
                    </label>
                    <div className="relative">
                        <input
                            {...register('tvName', { required: true })}
                            type="text"
                            id="input-group-1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Ftp site name"
                        />
                    </div>
                </div>
                <div className="uploadFile mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="file_input"
                    >
                        Upload Tv Image
                    </label>
                    <input
                        {...register('image', { required: true })}
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
                        Live tv Link
                    </label>
                    <div className="relative">
                        <input
                            {...register('link', { required: true })}
                            type="text"
                            id="input-group-2"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Ftp Link"
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

export default AddTv;
