import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Hero from '../assets/imgs/hero.jpg';
export class HeroPic extends Component {

render() {
    return (
        <React.Fragment>
            <img src={Hero} className="hero" alt="hero" />
        <div className="store-details">
          <h1>MyArt</h1>
          <p>Expose to an extensive and high-quality image database</p>
        </div>
        </React.Fragment>
    )
}
}
