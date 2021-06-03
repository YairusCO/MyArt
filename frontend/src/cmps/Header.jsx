import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import Menu from '../assets/imgs/menu.svg';
import { ItemFilter } from '../cmps/ItemFilter'

class _Header extends Component {
    render() {
        const { loggedInUser } = this.props;

        return <React.Fragment>
            <header className="header">
            <nav className="main-header">
            <NavLink exact to="/store"><div className="logo"><span className="pic">Pic</span><span>&</span><span className="art">Art</span></div></NavLink>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <div class="menu">
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        {loggedInUser && <span className="loggedin-user">
                            <Link to={`/user/${loggedInUser._id}`}>
                                Welcome, {loggedInUser.fullname}
                            </Link>
                        </span>}
                    </div>
                </nav>
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