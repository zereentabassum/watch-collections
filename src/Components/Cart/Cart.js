import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);

    return (
        <div className='cart'>
          <h2>Selected Watches</h2> 
          { 
          cart.map((data, index)=>
          <h3 key={index}>{data}</h3> 
          )}
          <button>Choose One For Me</button>
          <br />
          <button>Choose Again</button>
        </div>
    );
};

export default Cart;