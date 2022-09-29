import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Summary from '../Summary/Summary';

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
                <div className='mb-10 text-left ml-4 text-blue-900'>
                    <div>
                        <h1 className='text-4xl my-3'><FontAwesomeIcon icon={faDumbbell} />BODY-FITNESS-CLUB</h1>
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
            <div>
                <Summary></Summary>
            </div>
            <div>
                <h1>Ans the question</h1>
            </div>
        </div>
    );
};

export default Home;