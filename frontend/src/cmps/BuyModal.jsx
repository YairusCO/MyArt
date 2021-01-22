import { Button } from '@material-ui/core';
import React from 'react'

export function BuyModal({item}) {
    console.log('BuyModal');
    return (
        <div className="modal">
            <h1>Order Details</h1>
            <p>Item: {item.title}</p>
            <p>Price: {item.price}</p>
            <Button>Checkout & Download</Button>
        </div>
    )
}
