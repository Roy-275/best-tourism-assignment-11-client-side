import React from 'react';

const Overview = () => {
    return (
        <div className="md:flex bg-gray-700 md:px-48 items-center pb-4">
            <div className="md:p-6 sm:mb-5 md:mb-0">
                <h1 className="text-blue-500 md:text-5xl sm:text-2xl font-bold md:mb-3">98%</h1>
                <p className="text-gray-300 md:text-lg sm:text-sm md:p-0 sm:px-4 sm:text-justify md:text-center">
                    customer retention with award-winning account management and excellent customer service that puts your business travel needs first.
                </p>
            </div>
            <div className="md:p-6 sm:mb-5 md:mb-0">
                <h1 className="text-blue-500 md:text-5xl sm:text-2xl font-bold md:mb-3">99%</h1>
                <p className="text-gray-300 md:text-lg sm:text-sm md:p-0 sm:px-4 sm:text-justify md:text-center">
                    online adoption rate with our quick and easy-to-use interface to help you book your travel on any device, anytime and anywhere.
                </p>
            </div>
            <div className="md:p-6">
                <h1 className="text-blue-500 md:text-5xl sm:text-2xl font-bold md:mb-3">1min</h1>
                <p className="text-gray-300 md:text-lg sm:text-sm md:p-0 sm:px-4 sm:text-justify md:text-center">
                    average customer service response time – our in-house team are available 24/7 to help with any of your travel requirements.
                </p>
            </div>
        </div>
    );
};

export default Overview;