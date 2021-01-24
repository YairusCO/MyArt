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
                        <p><img className="profile-img" src={item.seller.imgUrl} alt="" />{item.seller.fullname}</p>
                        <div className="reactions">
                            <Button className="heart-icon" onClick={() => {onHeart()}}>
                                <img className="heart-icon" src={currHeart} alt="" />
                                </Button>
                            {/* <Button>👍</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}