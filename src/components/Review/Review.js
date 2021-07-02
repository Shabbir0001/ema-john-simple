import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from './ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handleRemoveProduct = (productKey) => {      
            const newCart = cart.filter(pd => pd.key !== productKey);
            setCart(newCart);
            removeFromDatabaseCart(productKey);
    };
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        console.log(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            console.log(savedCart[key]);
            return product; 
        });
        setCart(cartProducts);
    }, []);
    const thankyou = <img src={happyImage} alt="" srcset="" />
    return (
        <div className= 'twin-container'>
            <div className = 'product-container'>
            {
                cart.map(pd => <ReviewItems
                     key = {pd.key}
                     handleRemoveProduct = {handleRemoveProduct}
                     product={pd}
                     ></ReviewItems>)
            }
            {
                orderPlaced && thankyou
            }
            </div>
            <div className= 'cart-container'>
                 <Cart cart = {cart}>
                     <button 
                     onClick = {handlePlaceOrder}
                     className= "main-button"
                     >Place Order</button>
                 </Cart>
            </div>
        </div>
    );
};

export default Review;