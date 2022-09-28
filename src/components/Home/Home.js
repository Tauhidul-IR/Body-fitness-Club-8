import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    console.log(carts)
    return (
        <div className='grid grid-cols-4 gap-4 bg-white'>
            <div className='col-span-3'>
                <div className='mb-10'>
                    <div>

                        <h1 className='text-4xl my-3'>BODY-FITNESS-CLUB</h1>
                    </div>
                    <h3>Select Today's Excersice</h3>
                </div>
                <div className='grid grid-cols-3 mx-2'>
                    {
                        carts.map(cart => <Cart
                            cart={cart}
                            key={cart.id}
                        ></Cart>)
                    }
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Home;