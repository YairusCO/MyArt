import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            artist: '',
            lowPrice: -Infinity,
            highPrice: Infinity
        }
    }

    onChangeFilter = (type) => {
        this.props.onSetFilter(type);
    }

    


    render() {
        return <section className="item-filter item-filter-container">
        <input className="item-filter-search" type="text" placeholder="Enter Keywords" onChange={(ev) => {
            this.props.onSetFilter(ev.target.value, true)
        }} />

        <select className="item-sort" onChange={(value) => this.onChangeFilter(value.target.value)} >
            <option value="title" >Title</option>
            <option value="artist" >Artist</option>
            <option value="lowPrice">Low Price</option>
            <option value="highPrice">High Price</option>
         
        </select>

        <Button className="btn-search">Search</Button>
    </section>

    }
}