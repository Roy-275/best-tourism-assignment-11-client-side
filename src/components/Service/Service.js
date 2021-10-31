import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, detail, price, rating, image, _id } = props.service;
    return (
        <div className="md:flex justify-between flex-col shadow-xl md:py-3 sm:py-2 px-2">

            <div>
                <div className="flex justify-center m-2 pt-2">
                    <img className="" src={image} alt="" />
                </div>

                <h2 className="text-blue-500 md:text-3xl sm:text-base font-bold text-center md:mb-2">{name}</h2>

                <p className="md:text-base sm:text-sm text-gray-500 p-2">{detail}</p>
            </div>

            <div>
                <div className="flex justify-between px-2">
                    <h4 className="text-red-600 md:text-lg sm:text-sm font-bold">Price: {price}/=</h4>

                    <h4 className="text-yellow-600 md:text-lg sm:text-sm font-bold">Total Rating: {rating}</h4>
                </div>

                <Link to={`/services/${_id}`}>
                    <button className="border-2 p-2 m-2 rounded-lg bg-yellow-500 text-red-700 font-bold md:text-lg">Place Order</button>
                </Link>
            </div>

        </div>
    );
};

export default Service;