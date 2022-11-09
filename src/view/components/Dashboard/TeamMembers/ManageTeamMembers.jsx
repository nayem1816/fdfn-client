import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './../../../../redux/features/dataSlice';
import MemberList from './MemberList';

const ManageTeamMembers = () => {
    const { data } = useSelector((state) => state.dataReducer);
    let count = 1;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData('readMembers'));
    }, [dispatch]);

    console.log(data);
    return (
        <div>
            <h2 className="text-4xl">Manage Team Members</h2>
            <div className="product-table my-5">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Designation
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data?.map((member) => (
                                <MemberList
                                    key={member._id}
                                    member={member}
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

export default ManageTeamMembers;
