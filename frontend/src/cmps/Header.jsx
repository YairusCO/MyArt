import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

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
                <NavLink exact to="/">My Profile</NavLink>
                <NavLink to="/chat">About Us</NavLink>
                </div>
                {/* <Cart /> */}
            </nav>
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