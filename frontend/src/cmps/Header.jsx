import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import Menu from '../assets/imgs/menu.svg';
import { ItemFilter } from '../cmps/ItemFilter'

class _Header extends Component {
    // handleInput = ({ target: { name, value, type } }) => {
    //     const modValue = (type === 'number') ? parseInt(value) : value
    //     this.setState(prevState => {
    //       return {
    //         filterBy: {
    //           ...prevState.filterBy,
    //           [name]: modValue
    //         }
    
    //       }
    //     }
    //     , () => {
    
    //       this.props.loadItems(this.state.filterBy);
    //     })
    
    //   }
    render() {
        const { loggedInUser } = this.props;
       
        return <React.Fragment>
            <header>
                <nav className="main-header">
                    <NavLink exact to="/store"><div className="logo"><span className="pic">Pic</span><span>&</span><span className="art">Art</span></div></NavLink>
                        <Button className="btn-hamburger"><img src={Menu} alt="menu"/></Button>
                        {/* <ItemFilter handleInput={this.handleInput} /> */}
                    <div className="nav-bar">
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/chat">About Us</NavLink>
                        {loggedInUser && <span className="loggedin-user">
                            <Link to={`/user/${loggedInUser._id}`}>
                             Welcome, {loggedInUser.fullname}
                            </Link>
                        </span>}
                    </div>
                    {/* <Cart /> */}
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