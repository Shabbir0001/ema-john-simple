import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom: '2px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '10px',
        marginLeft: '100px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <br />
            <button 
            className="main-button"
            onClick={() => props.handleRemoveProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;