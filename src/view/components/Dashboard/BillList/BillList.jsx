import React from 'react';

const BillList = () => {
    return (
        <div>
            <h2 className="text-4xl">Orders List</h2>
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
                                    Bill ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    TOTAL PAY
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
                            {/* {productBillsData?.map((order) => (
                                <OrderList
                                    key={order._id}
                                    order={order}
                                    count={count++}
                                />
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillList;
