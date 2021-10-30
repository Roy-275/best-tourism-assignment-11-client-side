import React from 'react';
import image from '../../images/mobile-tab-laptop.png';

const Facilities = () => {
    return (
        <div className="bg-gray-300 md:flex md:pl-52 items-center sm:p-4">
            <div className="md:w-1/2 md:p-5 text-justify">
                <h3 className="text-blue-500 md:text-3xl sm:text-base font-bold text-center md:mb-5">Smooth travel in one place</h3>
                <p className="md:text-lg sm:text-sm text-gray-500 p-5">
                    With access to our proprietary award-winning self-booking tool, you’ll get more choice than with any other UK corporate travel solution provider. Book hotels, trains, flights, car hire, airport parking and travelcards all from inside one platform to make booking your journey effortless and smooth. From 24/7 365 uk-based customer support via phone, email or online and in-app chat to fully supported account management, you will always have someone to help you no matter your query, wherever you are in the world.
                </p>
            </div>
            <div className="md:p">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Facilities;