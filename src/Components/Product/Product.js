import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name, img} = props.product;
    return (
        <div className='product'>
                <img src={img} alt=''></img>

            <div className='product-info'>
                <h2>{name}</h2>
            </div>
           
        </div>
    );
};

export default Product;