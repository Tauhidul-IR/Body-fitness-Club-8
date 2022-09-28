import React from 'react';

const Cart = (props) => {
    console.log(props)
    const { name, id, img, age, time, details } = props.cart
    // console.log(props.id)
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <h4>For Age : {age}</h4>
                    <h4>Time Require : {time}</h4>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;