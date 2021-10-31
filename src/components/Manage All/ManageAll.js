import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ManageAll = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});

    //UPDATE an tour to confirmed from pending
    const handleUpdateStatus = (id) => {
        const url = `http://localhost:5000/orders/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));

        const updatedOrder = { name: order.name, email: order.email, orderTitle: order.orderTitle, price: order.price, address: order.address, mobileNumber: order.mobileNumber, status: "Confirmed" };
        setOrder(updatedOrder);

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


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
                        const remainingTours = orders.filter(order => order._id !== id)
                        setOrders(remainingTours)
                    }
                })
        }
    }

    return (
        <div>
            <Header></Header>
            {
                orders.map(order => <div key={order._id} className="bg-gray-300 mx-auto md:w-4/6 my-3 md:px-12 sm:px-2 md:px-0 sm:py-2">
                    <div className="flex justify-between sm:items-center md:items-start">
                        <h2 className="md:text-3xl sm:text-xl text-left font-bold text-pink-700 mt-2 sm:w-1/2 md:w-auto">{order.orderTitle}</h2>
                        <button onClick={() => handleCancelTour(order._id)} className="border-2 p-2 m-2 rounded-lg bg-red-500 text-white hover:bg-red-600 md:text-lg">Cancel Tour</button>
                    </div>
                    <h3 className="text-red-600 md:text-lg sm:text-sm font-bold text-left">Price: {order.price}/=</h3>

                    <h3 className="text-green-600 md:text-lg sm:text-sm font-bold text-left">Ordered-by: {order.name}</h3>

                    <div className="flex justify-between sm:items-center">
                        <h3 className="text-yellow-600 md:text-2xl sm:text-base font-bold text-left">Status: {order.status}</h3>
                        <button onClick={() => handleUpdateStatus(order._id)} className="border-2 p-2 m-2 rounded-lg bg-yellow-300 text-black hover:bg-yellow-400 md:text-lg">Update Status</button>
                    </div>
                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default ManageAll;