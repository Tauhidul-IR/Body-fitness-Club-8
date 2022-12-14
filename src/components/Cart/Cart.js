import React from 'react';

const Cart = (props) => {

    const { name, id, img, age, time, details } = props.cart

    return (
        <div>
            <div className="card w-72 bg-slate-800 shadow-xl my-2">
                <figure className="px-4 pt-4">
                    <img src={img} alt="Shoes" className="rounded-xl h-44" />
                </figure>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <h4>For Age : {age}</h4>
                    <h4>Time Require : {time}s</h4>
                    <div className="card-actions">
                        <button onClick={() => props.hanldeTOClick(props.cart)} className="btn btn-primary w-full">Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;