import React, { useRef } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const AddService = () => {
    const nameRef = useRef();
    const detailRef = useRef();
    const priceRef = useRef();
    const ratingRef = useRef();
    const imageRef = useRef();

    const handleAddService = (e) => {
        const name = nameRef.current.value;
        const detail = detailRef.current.value;
        const price = priceRef.current.value;
        const rating = ratingRef.current.value;
        const image = imageRef.current.value;

        const newService = { name, detail, price, rating, image };
        fetch('https://bloodcurdling-warlock-35232.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the service');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <div className="bg-blue-100">
            <Header></Header>
            <h2 className="md:text-5xl sm:text-2xl font-bold text-pink-700 md:px-5 sm:p-1">Add Service Here</h2>

            <form className="flex flex-col items-center md:py-4 sm:py-3" onSubmit={handleAddService}>
                <input ref={nameRef} className="border-2 border-black md:w-2/6 sm:w-5/6 mb-2" type="text" placeholder="Service Name" required />

                <textarea ref={detailRef} className="border-2 border-black md:w-2/6 sm:w-5/6 mb-2" name="" id="" cols="30" rows="5" placeholder="Service Description" required></textarea>

                <input ref={priceRef} className="border-2 border-black md:w-2/6 sm:w-5/6 mb-2" type="number" placeholder="Price" required />

                <input ref={ratingRef} className="border-2 border-black md:w-2/6 sm:w-5/6 mb-2" type="number" placeholder="Rating" required />

                <input ref={imageRef} className="border-2 border-black md:w-2/6 sm:w-5/6 mb-2" type="text" placeholder="Image url" required />

                <input className="md:w-1/6 sm:w-2/6 bg-purple-400 hover:bg-purple-500 text-red-800 font-bold md:text-2xl sm:text-lg cursor-pointer" type="submit" name="Submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddService;