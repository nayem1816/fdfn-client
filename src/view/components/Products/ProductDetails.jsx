import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
    const [productData, setProductData] = React.useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readProducts/${id}`)
            .then((res) => res.json())
            .then((data) => setProductData(data.data));
    }, [id]);

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        src={`${productData?.image}`}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {productData?.productName}
                        </h1>
                        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h2 className="text-gray-900 text-2xl title-font font-medium mb-1">
                            Description:
                        </h2>
                        <p className="leading-relaxed">
                            {productData?.productDescription}
                        </p>
                        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                {productData?.productPrice} Tk.
                            </span>
                            <Link
                                to={`/product/productPayment/${productData?._id}`}
                                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                            >
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
