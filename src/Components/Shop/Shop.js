import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'


const Shop = () => {

   const products = [
    {
        name:"Rolex",
        id: 1,
        img:"https://content.rolex.com/dam/2021/upright-bba-with-shadow/m116503-0001.png?impolicy=v6-upright&imwidth=270",
        price: 97
    },
    {
        name:"Fossil Casual Quartz",
        id: 2,
        img:"https://fossil.scene7.com/is/image/FossilPartners/ES4784-alt?$sfcc_fos_medium$",
        price: 67
    },
    {
        name:"Timex Highland Street",
        id: 3,
        img:"https://content.rolex.com/dam/2021/upright-bba-with-shadow/m126234-0050.png?impolicy=v6-upright&imwidth=270",
        price: 87
    },
    {
        name:"Ferrari Quartz",
        id: 4,
        img:"https://watchshopbd.com/wp-content/uploads/2021/03/FS5305_main.jpg",
        price: 64
    },
    {
        name:"Cartier",
        id: 5,
        img:"https://fossil.scene7.com/is/image/FossilPartners/T233XLTMN_main?$sfcc_fos_large$",
        price: 59
    },
    {
        name:"Timex Weekender",
        id: 6,
        img:"https://target.scene7.com/is/image/Target/GUEST_4ae2a387-43f3-413e-b3ce-adad028b5988?wid=488&hei=488&fmt=pjpeg",
        price: 55
    },
    {
        name:"Casio Quarz",
        id: 7,
        img:"https://fossil.scene7.com/is/image/FossilPartners/T233XLTMN_main?$sfcc_fos_large$",
        price: 86
    },
    {
        name:"Rolex Daytona",
        id: 8,
        img:"https://fossil.scene7.com/is/image/FossilPartners/SKW6459_main?$sfcc_fos_large$",
        price: 72
    },
    {
        name:"Fossil Pink",
        id: 9,
        img:"https://fossil.scene7.com/is/image/FossilPartners/ES5185-alt?$sfcc_fos_medium$",
        price: 99
    },
    {
        name:"Fossil Quartz Chronograph",
        id: 10,
        img:"https://fossil.scene7.com/is/image/FossilPartners/ES5168-alt?$sfcc_fos_medium$",
        price: 74
    }
]
console.log(products);



    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product key={product.id} product={product}></Product>)
                }
       
            </div>
            <div className='selector-container'>
                <h2>Selected Clothes</h2>
            </div>
        </div>
    );
};

export default Shop;