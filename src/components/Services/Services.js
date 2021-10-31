import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className="md:text-5xl sm:text-2xl font-bold text-pink-700 md:px-5 sm:px-2 mt-2">We offer this tour plans</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-16 gap-y-4  md:px-60 sm:px-4 pb-4 pt-2">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;