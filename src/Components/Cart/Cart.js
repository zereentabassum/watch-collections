
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;
  const {chooseOneButton, chooseAgain} = props;
   

    
    // const chooseOneButton = () => {
    //   const randomName = Math.floor(Math.random()*cart.length);
    // const a = cart[randomName]; 
    // console.log(a)
      //  }
    
  

    return (
        <div className='cart'>
          <h2>Selected Watches</h2> 
       
          { 
          // cart.map((data, index)=>
          // <h3 key={index}>{data}</h3> 
          
          // )
          
            
            cart.map(cart=> 
              <div key={cart.id} className='cart-div'>
                <img src={cart.img} alt="" />
                <h3>{cart.name}</h3>

              </div>) 
          
        
          
          } 
          
          <button onClick={chooseOneButton}>Choose One For Me</button>
          <br />
          <button onClick={chooseAgain}>Choose Again</button>
        </div>
      );
};

export default Cart;