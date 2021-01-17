import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function ItemPreview({ item, onRemoveItem, onBuy }) {

    return (

        <div>
            <ul className="clean-list item-preview">
                <li>{item.title}</li>
                <img className="item-img" src={item.imgUrl} alt="" />
                <li>Price: {item.price}</li>
                <li>Artist: {item.seller.fullname}</li>
            </ul>
            <Button onClick={() => { onRemoveItem(item._id) }}>Delete</Button>
            <Button><Link to={`/item/${item._id}`}>Details</Link></Button>
                <Button onClick={() => {
                    this.onBuy(item)
                }}>Buy</Button>
        </div>
    )
}