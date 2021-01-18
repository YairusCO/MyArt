import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function ItemPreview({ item, onBuy }) {

    return (
        <React.Fragment>
            <div>
                <ul className="clean-list item-preview">
                <Link to={`/item/${item._id}`}><img className="item-img" src={item.imgUrl} alt="" /></Link>
                <div className="card-info">
                    {/* <li >{item.title}</li>
                    <li>💲{item.price}</li> */}
                    <img className="profile-img" src={item.seller.imgUrl} alt="" />
                    <li>{item.seller.fullname}</li>
                    </div>
                </ul>
                <div className="items-btns">
                    <Button onClick={() => {
                        this.onBuy(item)
                    }}>Buy</Button>
                </div>
            </div>
        </React.Fragment>
    )
}