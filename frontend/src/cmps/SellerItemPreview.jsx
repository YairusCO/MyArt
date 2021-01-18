import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function SellerItemPreview({ sellerItem}) {

    return (
        <React.Fragment>
            <div>
                <ul className="clean-list item-preview">
                    <img className="item-img" src={sellerItem.imgUrl} alt="" />
                </ul>
                <div className="items-btns">
                    <Button><Link to={`/item/${sellerItem._id}`}>Details</Link></Button>
               
                </div>
            </div>
        </React.Fragment>
    )
}