import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';


const Shop = () => {

   const products = [
    {
        name:"Fossil Silver Gold Chronograph",
        id: 1,
        img:"https://www.swisswatchcompany.net/images/watches/rolex_ladies_watches/large1/ladies-rolex-79173-2001.jpg",
        price: 97
    },
    {
        name:"Fossil Casual Silver Quartz",
        id: 2,
        img:"https://fossil.scene7.com/is/image/FossilPartners/ES4784-alt?$sfcc_fos_medium$",
        price: 67
    },
    {
        name:"Timex Highland Street",
        id: 3,
        img:"https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5f0ca91caeb26931758665f4/-473Wx593H-460656358-silver-MODEL.jpg",
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

    const [cart, setCart] = useState([]);
    const handleAddButton = (product) => {
        const newCart = [...cart, product.name];
        setCart(newCart)
        
    }



    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product key={product.id} product={product} handleAddButton={handleAddButton}></Product>)
                }
       
            </div>
            <div className='selector-container'>
               
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;