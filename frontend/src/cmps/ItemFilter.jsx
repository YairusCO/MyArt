import { Button } from '@material-ui/core';
import React from 'react';

export function ItemFilter(props) {

    return <section className="item-filter item-filter-container">
        <input className="item-filter-search" name="title" type="text" placeholder="Search:" onChange={props.handleInput} />

        {/* <Button> <SellerItemList sellerItems={sellerItems}>
              {sellerItems.map(sellerItem => <SellerItemPreview key={sellerItem._id} sellerItem={sellerItem} />)}
            </SellerItemList>  </Button> */}

        <Button>Paints</Button>
        <Button>Bycecles</Button>
        <Button>Nature</Button>

        {/* <select className="item-sort" name="title" onChange={(ev) => this.handleChange(ev)} >
            <option value="title" >Title</option>
            <option value="artist" >Artist</option>
            <option value="lowPrice">Low Price</option>
            <option value="highPrice">High Price</option>
        </select> */}

        {/* <Button onClick={ this.onChangeFilter } className="btn-search">Search</Button> */}
    </section>
}
