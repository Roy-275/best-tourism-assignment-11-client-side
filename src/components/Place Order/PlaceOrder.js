import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PlaceOrder = () => {
    const { user } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const orderTitleRef = useRef();
    const priceRef = useRef();
    const addressRef = useRef();
    const mobileNumberRef = useRef();

    const handlePlaceOrder = (e) => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const orderTitle = orderTitleRef.current.value;
        const price = priceRef.current.value;
        const address = addressRef.current.value;
        const mobileNumber = mobileNumberRef.current.value;
        const status = 'Pending';

        const newOrder = { name, email, orderTitle, price, address, mobileNumber, status };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully placed order, go to Manage My Tours to see.');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    const [order, setOrder] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);
    const { serviceId } = useParams();

    useEffect(() => {
        const serviceDetails = order.find(element => element._id === (serviceId));
        setSingleOrder(serviceDetails);
    }, [order]);


    return (
        <div className="bg-gray-200">
            <Header></Header>
            <div className="md:flex md:px-6 items-center md:py-3">
                <div className="md:w-1/2 md:mr-3 md:px-3 py-2">
                    <div className="flex justify-center my-6 w-3/6 mx-auto">
                        <img src={singleOrder?.image} alt="" />
                    </div>
                    <h2 className="md:text-4xl sm:text-2xl font-bold text-yellow-700 md:px-5 sm:p-1">{singleOrder?.name}</h2>
                    <p className="md:text-base sm:text-xs font-semibold text-blue-700 md:px-5 sm:px-2 sm:text-justify md:text-center">{singleOrder?.detail}</p>
                </div>
                <div className="md:w-1/2 md:ml-3 md:px-3 py-2 bg-blue-100">
                    <h2 className="md:text-5xl sm:text-2xl font-bold text-pink-700 md:px-5 sm:p-1">Place Your Order</h2>
                    <form className="flex flex-col items-center py-4 md:rounded-lg" onSubmit={handlePlaceOrder}>
                        <input ref={nameRef} className="border-2 border-black w-4/6 mb-2" type="text" value={user.displayName} />

                        <input ref={emailRef} className="border-2 border-black w-4/6 mb-2" type="email" value={user.email} />

                        <input ref={orderTitleRef} className="border-2 border-black w-4/6 mb-2" type="text" value={singleOrder?.name} />

                        <input ref={priceRef} className="border-2 border-black w-4/6 mb-2" type="number" value={singleOrder?.price} />

                        <textarea ref={addressRef} className="border-2 border-black w-4/6 mb-2" name="" id="" cols="30" rows="3" placeholder="Your Address" required></textarea>

                        <input ref={mobileNumberRef} className="border-2 border-black w-4/6 mb-2" type="text" placeholder="Your mobile number" required />

                        <input className="md:w-1/6 sm:w-2/6 mb-2 bg-purple-400 hover:bg-purple-500 text-red-800 font-bold md:text-2xl cursor-pointer" type="submit" name="submit" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;