import { Button } from '@material-ui/core';
import React from 'react'

export function BuyModal({item, loggedInUser}) {
    return (
        <div className="modal">
            <h1>Order Details</h1>
            <p>Item: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>user: {loggedInUser.fullname}</p>
            <Button className="buy-btn">Checkout & Download</Button>
        </div>
    )
}