import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Hero from '../assets/imgs/hero.jpg';
import {Cart} from './Cart.jsx'

class _Header extends Component {
    render() {
        const {loggedInUser} = this.props;
        return <React.Fragment> 
        <header>
           
            <nav className="main-header">
            <NavLink exact to="/store"><div className="logo">MyArt</div></NavLink>
            <div className="nav-bar">
                <NavLink to="/login">Login</NavLink>
                <NavLink exact to="/">User Reviews</NavLink>
                <NavLink to="/chat">Chat Room</NavLink>
                </div>
                {/* <Cart /> */}
            </nav>
                <img src={Hero} className="hero appStore" alt="hero" />
                <div  className="store-details">
                <h1>MyArt Store</h1>
                <p>Expose to an extensive and high-quality image database</p>
                </div>
            
            {loggedInUser && <span className="loggedin-user">

                <Link to={`user/${loggedInUser._id}`}>
                    {loggedInUser.fullname}
                </Link>
                
                <span>{loggedInUser.score || 0}</span>
            </span>}
            
        </header>
        </React.Fragment>
    }

}
const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {}


export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)