import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
          <h2>Selected Watches</h2>  
          <button>Choose One For Me</button>
          <br />
          <button>Choose Again</button>
        </div>
    );
};

export default Cart;