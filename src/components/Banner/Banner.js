import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="md:h-screen banner text-left md:p-6">
            <div className="md:w-1/2">
                <div className="rounded-lg bg-black bg-opacity-50">
                    <h1 className="md:text-6xl sm:text-3xl font-bold text-gray-200 p-5 "> Travel Smooth </h1>
                    <h2 className="md:text-2xl sm:text-lg text-white p-5 ">
                        With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support, business travel has never been smoother.
                    </h2>
                    <p className="md:text-2xl sm:text-lg font-semibold text-white p-5 ">
                        BEST Travel Management Company <br />
                        BEST Self-Booking Tool <br />
                        Business Travel Awards 2020
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Banner;