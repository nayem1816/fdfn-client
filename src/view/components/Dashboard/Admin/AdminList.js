import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminListDetails from './AdminListDetails';
import { fetchData } from './../../../../redux/features/dataSlice';

const AdminList = () => {
    const { data, loading, error } = useSelector((state) => state.dataReducer);
    let count = 1;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData('readAdmins'));
    }, [dispatch]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        console.log(error);
    }
    if (data) {
        console.log(data);
    }

    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Role
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data?.map((admin) => (
                            <AdminListDetails
                                key={admin._id}
                                admin={admin}
                                count={count++}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminList;
