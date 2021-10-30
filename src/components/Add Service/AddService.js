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
        fetch('http://localhost:5000/services', {
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
        <div>
            <Header></Header>
            <form className="flex flex-col items-center bg-blue-100 md:py-4" onSubmit={handleAddService}>
                <input ref={nameRef} className="border-2 border-black w-2/6 mb-2" type="text" placeholder="Service Name" />

                <textarea ref={detailRef} className="border-2 border-black w-2/6 mb-2" name="" id="" cols="30" rows="5" placeholder="Service Description"></textarea>

                <input ref={priceRef} className="border-2 border-black w-2/6 mb-2" type="number" placeholder="Price" />

                <input ref={ratingRef} className="border-2 border-black w-2/6 mb-2" type="number" placeholder="Rating" />

                <input ref={imageRef} className="border-2 border-black w-2/6 mb-2" type="text" placeholder="Image url" />

                <input className="w-1/6 mb-2 bg-purple-400 hover:bg-purple-500 text-red-800 font-bold md:text-2xl cursor-pointer" type="submit" name="Submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddService;