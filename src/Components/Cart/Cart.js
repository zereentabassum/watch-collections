import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);

    return (
        <div className='cart'>
          <h2>Selected Watches</h2>  
          <h3>{cart}</h3>
          <button>Choose One For Me</button>
          <br />
          <button>Choose Again</button>
        </div>
    );
};

export default Cart;