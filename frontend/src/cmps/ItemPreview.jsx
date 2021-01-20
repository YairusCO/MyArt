import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function ItemPreview({ item, onBuy, onAddToCart }) {

    return (
        <React.Fragment>
            <div>
                <div className="item-preview">
                    <Link to={`/item/${item._id}`}><img className="item-img" src={item.imgUrl} alt="" /></Link>
                    <div className="card-info">
                        <p><img className="profile-img" src={item.seller.imgUrl} alt="" />{item.seller.fullname}</p>
                        <div className="reactions">
                            <Button>❤️</Button>
                            <Button>👍</Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}