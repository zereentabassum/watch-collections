
import { useState } from 'react';
import './Cart.css';

const Cart = ({cart, setCart}) => {
  const [random, setRandom] = useState({});

  
    let randomProduct;
    const chooseOneButton = () => {
      let randomName = Math.floor(Math.random()*cart.length);
     randomProduct = cart[randomName]; 
     setRandom(randomProduct);
   
    
       }
    
      const chooseAgain = () =>{
        setCart([]);
        setRandom({})
    }
  

    return (
        <div className='cart'>
          <h2>Selected Watches</h2> 
       
          { 
        
            
            cart.map(cart=> 
              <div key={cart.id} className='cart-div'>
                <img src={cart.img} alt="" />
                <h4>{cart.name}</h4>

              </div>) 
          
        
          
          }
           {
            
           }
          
          <button onClick={chooseOneButton} disabled={cart.length===0}>Choose One For Me</button>
          <br />
         
            {<div className='cart-div'>
            <img src={random.img} alt="" />
            <h4>{random.name}</h4>

          </div>}
          <button onClick={chooseAgain}>Clear All</button>

        </div>
      );
};

export default Cart;