import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Manage = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(() => {
        const userOrders = orders.filter(userOrder => userOrder.email === user.email);
        setMyOrders(userOrders);
    }, [orders, user.email])

    //DELETE an order
    const handleCancelTour = id => {
        const proceed = window.confirm('Are you sure, You want to cancel tour?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Tour canceled');
                        const remainingTours = myOrders.filter(order => order._id !== id)
                        setMyOrders(remainingTours)
                    }
                })
        }
    }

    return (
        <div>
            <Header></Header>
            {
                myOrders.map(order => <div key={order._id} className="bg-gray-300 mx-auto md:w-4/6 my-3 md:px-12 sm:px-2 md:px-0 sm:py-2">
                    <div className="flex justify-between sm:items-center md:items-start">
                        <h2 className="md:text-3xl sm:text-xl text-left font-bold text-pink-700 mt-2 sm:w-1/2 md:w-auto">{order.orderTitle}</h2>
                        <button onClick={() => handleCancelTour(order._id)} className="border-2 p-2 m-2 rounded-lg bg-red-500 text-white hover:bg-red-600 md:text-lg">Cancel Tour</button>
                    </div>
                    <h3 className="text-red-600 md:text-lg sm:text-sm font-bold text-left">Price: {order.price}/=</h3>
                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Manage;