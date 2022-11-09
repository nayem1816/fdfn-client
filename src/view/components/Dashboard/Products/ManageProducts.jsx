import React, { useEffect } from 'react';
import ProductList from './ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './../../../../redux/features/dataSlice';

const ManageProducts = () => {
    const { data, loading, error } = useSelector((state) => state.dataReducer);
    let count = 1;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData('readProducts'));
    }, [dispatch]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (data) {
        console.log(data);
    }

    return (
        <div>
            <h2 className="text-4xl">Manage Product</h2>
            <div className="product-table my-5">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product Image
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data?.map((pd) => (
                                <ProductList
                                    key={pd._id}
                                    pd={pd}
                                    count={count++}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
