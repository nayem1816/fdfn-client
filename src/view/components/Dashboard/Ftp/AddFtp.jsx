import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddFtp = () => {
    const [getFtp, setGetFtp] = React.useState([]);
    const [error, setError] = React.useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        var formData = new FormData();
        formData.append('ftpName', data.ftpName);
        formData.append('link', data.link);
        formData.append('image', data.image[0], data.image[0].name);

        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow',
        };

        fetch('http://localhost:5000/api/v1/createFtp', requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setGetFtp(result);
                toast.success('Ftp site Added Successfully', {
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
        toast.error('Ftp site not added');
    }
    if (getFtp) {
        console.log(getFtp);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl">Add Ftp Site</h2>
            <div className="gap-3 my-16 grid grid-cols-1 lg:grid-cols-2">
                <div className=" mb-6">
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Ftp site name
                    </label>
                    <div className="relative">
                        <input
                            {...register('ftpName', { required: true })}
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
                        Upload Ftp Image
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
                        Ftp Link
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

export default AddFtp;
