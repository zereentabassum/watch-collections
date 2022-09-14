import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {name, img, id, price} = props.product;
    const {handleAddButton, product} = props;
    return (
        <div className='product'>
                <img src={img} alt=''></img>

            <div className='product-info'>
                <h4> {name}</h4>
                <h4> <span className='info'> Id: </span> {id}</h4>
                <h4> <span className='info'> Price: </span> ${price}</h4>
            </div>
            
            <button onClick={()=>handleAddButton(product)} className='add-btn'><strong>Add to Cart</strong>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
         
        </div>
    );
};

export default Product;