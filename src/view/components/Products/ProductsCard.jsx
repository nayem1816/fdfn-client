import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-10 mx-2 ">
            <Link to={`/product/${product?._id}`}>
                <img
                    style={{ width: '100%', height: '320px' }}
                    className="p-8 rounded"
                    src={`${product?.image}`}
                    alt="product"
                />
            </Link>
            <div className="px-5 pb-5">
                <Link to={`/product/${product?._id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product?.productName}
                    </h5>
                </Link>
                <div className="flex justify-between items-center my-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {product?.productPrice} Tk.
                    </span>
                    <Link
                        to={`/product/${product._id}`}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
