import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function ItemPreview({ item ,  onRemoveItem}) {
    return (

        <div>
       <ul className="clean-list">
           <li>{item.title}</li>
           <img src={x} alt="" />
           <li>Description: {item.description}</li>
           <li>Price: {item.price}</li>
           <li>Artist: {item.seller.fullname}</li>
       </ul>
       <Button onClick={() => { onRemoveItem(item._id) }}>Delete</Button>
       <Button><Link to={`/item/${item._id}`}>Details</Link></Button>
        </div>
    )
}