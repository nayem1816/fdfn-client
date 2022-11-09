import axios from 'axios';
import React from 'react';

const FileInput = ({ setImageURL }) => {
    const handleImageUpload = (event) => {
        const imgData = new FormData();
        imgData.set('key', '94e8e908997cb2f7fead68d619169951');
        imgData.append('image', event.target.files[0]);

        axios
            .post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImageURL(response.data.data.image.url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <input
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
        />
    );
};

export default FileInput;
