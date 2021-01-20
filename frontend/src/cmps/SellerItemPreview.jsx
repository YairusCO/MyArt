import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function SellerItemPreview({ sellerItem}) {

    return (
        <React.Fragment>
            <div>
                <p className="item-preview">
                <Button><Link to={`/item/${sellerItem._id}`}>  <img className="item-img" src={sellerItem.imgUrl} alt="" /></Link></Button>
                  
                </p>
                <div className="items-btns">
                   
               
                </div>
            </div>
        </React.Fragment>
    )
}