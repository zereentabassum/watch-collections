import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name, img, id, price} = props.product;
    return (
        <div className='product'>
                <img src={img} alt=''></img>

            <div className='product-info'>
                <h3>Name: {name}</h3>
                <h4>Id: {id}</h4>
                <h4>Price: {price}</h4>
            </div>
            <button className='add-btn'><strong>Add to Cart</strong>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;