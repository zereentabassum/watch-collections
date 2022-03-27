
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;
  const {chooseOneButton, randomName, chooseAgain} = props;
    console.log(cart);
    console.log(props);
   

    
    // const chooseOneButton = () => {
    //   const randomName = Math.floor(Math.random()*cart.length);
    // const a = cart[randomName]; 
    // console.log(a)
      //  }
   
     
      
    
    

    return (
        <div className='cart'>
          <h2>Selected Watches</h2> 
          { 
          cart.map((data, index)=>
          <h3 key={index}>{data}</h3> 
          
          )
          
          }
          {
            <h3>{cart[randomName]}</h3>
          }
          
          
          <button onClick={chooseOneButton}>Choose One For Me</button>
          <br />
          <button onClick={chooseAgain}>Choose Again</button>
        </div>
      );
};

export default Cart;