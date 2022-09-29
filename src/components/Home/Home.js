import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Summary from '../Summary/Summary';
import { getStoredCart } from '../../utilities/fakedb';

const Home = () => {
    //for main data 
    const [carts, setCarts] = useState([])
    //for show sum of time
    const [clickCart, setClickCart] = useState([])
    //for breakData
    const [breakData, setBreakData] = useState([])


    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    // useEffect(() => {
    //     const storedCard = getStoredCart();
    //     // console.log(storedCard)
    //     const savedCart = [];
    //     for (const id in storedCard) {
    //         const addedProduct = carts.find(cart => cart.id === id)
    //         if (addedProduct) {
    //             // const quantity = storedCard[id]
    //             // addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct)
    //         }
    //     }
    //     setClickCart(savedCart);
    // }, [carts])



    useEffect(() => {
        fetch('breakData.json')
            .then(res => res.json())
            .then(data => setBreakData(data))
    }, [])
    // console.log(breakData)






    // const breakTimes = [10, 20, 30, 40];











    const handleTOClick = (carts) => {
        // setClickCart(carts)
        const newCart = [...clickCart, carts]
        setClickCart(newCart)
    }

    // console.log(carts)
    return (
        <div>
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
                                hanldeTOClick={handleTOClick}
                            ></Cart>)
                        }
                    </div>
                </div>
                <div>
                    <Summary breakData={breakData}
                        clickCart={clickCart}

                    ></Summary>
                </div>

            </div>
            <div className='grid grid-cols-4 gap-4 bg-white text-black'>
                <div className='col-span-3'>
                    <h1 className='text-4xl'>Ans the question</h1>
                    <div>
                        <div className='w-3/4 mx-auto'>
                            <h1 className='text-2xl'>Q1: How does react work?</h1>
                            <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                        </div>

                        <div className='w-3/4 mx-auto'>
                            <h1 className='text-2xl'>Q2: Difference between props and state?</h1>
                            <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
                        </div>

                        <div className='w-3/4 mx-auto'>
                            <h1 className='text-2xl'>Q3:why use of useEffect in react</h1>
                            <p>Ans: Running once on mount: fetch API data
                                Running on state change: validating input field
                                Running on state change: live filtering
                                Running on state change: trigger animation on new array value
                                Running on props change: update paragraph list on fetched API data update
                                Running on props change: updating fetched API data to get BTC updated price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;