import React from 'react';
import Break from '../Break/Break';

const Summary = (props) => {
    console.log(props.showBreak)
    const { clickCart } = props


    let newTime = 0;
    for (const cart of clickCart) {
        newTime = newTime + cart.time
    }

    return (
        <div className='fixed'>
            <div className='mt-6 text-left'>
                <h2 className='font-bold text-black text-2xl'>Tauhidul Islam Robin</h2>
                <h6>Savar,Dhaka</h6>
                <div className='mt-5'>
                    <div className='flex bg-zinc-200 rounded text-black'>
                        <div className='m-4'>
                            <h5> <span className='text-3xl font-bold'>84</span>kg</h5>
                            <h5>Weight</h5>
                        </div>
                        <div className='m-4'>
                            <h5 className='text-3xl font-bold'>5.4</h5>
                            <h5>Height</h5>
                        </div>
                        <div className='m-4'>
                            <h5> <span className='text-3xl font-bold'>24</span>Yrs</h5>
                            <h5>Age</h5>
                        </div>
                    </div>
                </div>
                <h3 className='text-2xl text-black mt-6 mb-3'>Add a Break</h3>
                <div>
                    <div>
                        <ul className="menu menu-vertical lg:menu-horizontal bg-zinc-200 text-black rounded">

                            {
                                props.breakData.map(breaks => <Break breaks={breaks}
                                    loadBreakTime={props.loadBreakTime}
                                ></Break>)
                            }

                        </ul>
                    </div>
                </div>
                <h2 className='text-2xl text-black mt-6 mb-3'>Exercise Details</h2>
                <div>
                    <div className='bg-zinc-200 my-2 p-2 text-black rounded flex justify-between'>
                        <h4>Exercise time </h4><span>{newTime}sec</span>
                    </div>
                    <div className='bg-zinc-200 my-2 p-2 text-black rounded flex justify-between'>
                        <h4>Break time </h4><span>{props.showBreak}sec</span>
                    </div>
                </div>
                <button className="btn btn-primary mt-8 w-full">Activity Completed</button>

            </div>
        </div>
    );
};

export default Summary;