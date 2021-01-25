import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

function onScrollToTop(){
window.scrollTo(0, 0);
 }

export function SellerItemPreview({ sellerItem}) {

    return (
        <React.Fragment>
            <div>
                <p className="item-preview">
                <Button onClick={() => {onScrollToTop()}}>
                    <Link to={`/item/${sellerItem._id}`}>  <img className="item-img" src={sellerItem.imgUrl} alt="" /></Link>
                    </Button>

                </p>
                <div className="items-btns">

                </div>
            </div>
        </React.Fragment>
    )
}