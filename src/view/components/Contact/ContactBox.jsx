import React from 'react';

const ContactBox = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center my-10 mx-2">
            <div className="">
                <div className="box border border-danger rounded">
                    <div
                        style={{ backgroundColor: '#00A0F3' }}
                        className="hading rounded-top text-white"
                    >
                        <div className="px-3 py-2">
                            <p className="m-0">Office</p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="px-3 my-4">
                            <p className="">Dhaladia</p>
                            <p className="">Rajabari-1742, Sreepur</p>
                            <p className="">Gazipur-1740.</p>
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: '#F64746' }}
                        className="footer rounded-bottom"
                    >
                        <div className="p-3 text-white">
                            <p className="m-0">+8801310913326</p>
                            <p className="m-0">fdfn2016@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 mx-2 md:mx-10 my-5">
                <h2 className="text-3xl mb-10">Contact Us</h2>
                <form>
                    <div class="mb-6">
                        <label
                            for="name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="bane"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="john doe"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="jhon@gmail.com"
                            required
                        />
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactBox;
