import { Button } from '@material-ui/core';
import React from 'react'
// import swal from 'sweetalert';

export function BuyModal({ order, loggedInUser }) {
console.log('order',order);
    return (

        <div className="modal">
            <h1>Order Details</h1>
            <p>Item: {order.item.title}</p>
            <img src={order.item.imgUrl} alt=""/>
            <p>Price: {order.item.price}</p>
            <Button className="buy-btn">Checkout & Download</Button>
        </div>

    )
}
