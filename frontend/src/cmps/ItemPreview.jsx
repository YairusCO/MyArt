import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import heart from '../assets/imgs/heart.png';
import heartRed from '../assets/imgs/heart-red.png';
import Button from '@material-ui/core/Button';

var currHeart = heartRed;
function onHeart(){
    currHeart = heartRed;
}

function onScrollToTop(){
    window.scrollTo(0, 0); }
    
export function ItemPreview({ item, onBuy, onAddToCart }) {

    return (
        <React.Fragment>
            <div>
                <div className="item-preview">
                    <Link to={`/item/${item._id}`} onClick={() => {onScrollToTop()}} ><img className="item-img" src={item.imgUrl} alt="" /></Link>
                    <div className="card-info">
                    <img className="profile-img" src={item.seller.imgUrl} alt="" />
                    <p>{item.seller.fullname}</p>
                     
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}