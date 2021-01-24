import React from 'react';

export function ItemFilter(props) {

    return <section className="item-filter item-filter-container">
        <input className="item-filter-search" name="title" type="text" placeholder="Search:" onChange={props.handleInput} />

        {/* <button name="artist1" onClick={props.handleArtist}>Paints</button>
        <button>Bycecles</button>
        <button>Nature</button> */}

        {/* <select className="item-sort" name="title" onChange={(ev) => this.handleChange(ev)} >
            <option value="title" >Title</option>
            <option value="artist" >Artist</option>
            <option value="lowPrice">Low Price</option>
            <option value="highPrice">High Price</option>
        </select> */}

        {/* <button onClick={ this.onChangeFilter } className="btn-search">Search</button> */}
    </section>
}
