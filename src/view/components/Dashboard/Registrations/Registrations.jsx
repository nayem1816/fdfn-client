import React, { useEffect, useState } from 'react';
import RegistrationList from './RegistrationList';

const Registrations = () => {
    const [registrationData, setRegistrationData] = useState([]);
    let count = 1;
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/readRegPackage`)
            .then((res) => res.json())
            .then((data) => setRegistrationData(data.data));
    }, []);
    return (
        <div>
            <h2 className="text-4xl">Manage Registrations</h2>
            <div className="product-table my-5">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Phone
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Package
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total Mb
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrationData?.map((reg) => (
                                <RegistrationList
                                    key={reg._id}
                                    reg={reg}
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

export default Registrations;
