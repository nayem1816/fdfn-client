import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config';

const MyOrder = () => {
    const [orderData, setOrderData] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        axios
            .get(
                'https://fdfn-server-v2.vercel.app/api/v1/readProductBillByEmail/?email=' +
                    user?.email
            )
            .then((res) => {
                setOrderData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user?.email]);

    return (
        <div>
            <div className="py-5 mb-5 bg-red-600">
                <h2 className="text-white text-2xl text-center underline">
                    My Orders
                </h2>
            </div>
            <div className="order-history container mx-auto p-5 my-10">
                {orderData.map((data) => (
                    <div key={data?._id} className="mb-24">
                        <div className="order-history-top flex grid-cols-1 md:grid-cols-3 gap-10">
                            <p>
                                <span className="text-inherit font-bold">
                                    Order ID
                                </span>{' '}
                                : <span>{data?._id}</span>
                            </p>
                            <p>
                                <span className="text-inherit font-bold">
                                    Order Date:
                                </span>{' '}
                                <span>{data?.createOrderDate}</span>
                            </p>
                            <p>
                                <span className="text-inherit font-bold">
                                    Order Status:
                                </span>{' '}
                                <span>{data?.status}</span>
                            </p>
                        </div>
                        <hr class="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="order-details flex gap-5">
                            <div className="img">
                                <img
                                    style={{ width: '70px', height: '60px' }}
                                    src={`${data?.image}`}
                                    alt=""
                                />
                            </div>
                            <div className="details">
                                <h2 className="text-xl font-bold">
                                    {data?.productName}
                                </h2>
                                <p className="text-gray-500">
                                    <span className="text-inherit font-bold">
                                        Price:
                                    </span>{' '}
                                    {data?.productPrice}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrder;
