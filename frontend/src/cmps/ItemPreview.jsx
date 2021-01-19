import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function ItemPreview({ item, onBuy , onAddToCart}) {

    return (
        <React.Fragment>
            <div>
                <ul className="clean-list item-preview">
                    <Link to={`/item/${item._id}`}><img className="item-img" src={item.imgUrl} alt="" /></Link>
                    <div className="card-info">
                        <img className="profile-img" src={item.seller.imgUrl} alt="" />
                        <li>{item.seller.fullname}</li>
                    </div>
                    <div className="items-btns">
                        <Button onClick={() => {
                            onBuy([item])
                        }}>Buy</Button>
                        <Button>Add to cart</Button>
                    </div>
                </ul>
            </div>
        </React.Fragment>
    )
}