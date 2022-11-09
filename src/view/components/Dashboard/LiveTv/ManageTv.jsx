import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './../../../../redux/features/dataSlice';
import TvList from './TvList';

const ManageTv = () => {
    const { data, loading, error } = useSelector((state) => state.dataReducer);
    let count = 1;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData('readTv'));
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
            <h2 className="text-4xl">Manage Live Tv</h2>
            <div className="product-table my-5">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Tv Image
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Tv Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Tv url
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data?.map((tv) => (
                                <TvList key={tv._id} tv={tv} count={count++} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTv;
