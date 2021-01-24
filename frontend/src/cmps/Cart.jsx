import React, { Component } from 'react'
import {cartService} from '../services/cartService'
import {userService} from '../services/userService'

export  class Cart extends Component {
    state = {
        user : null,
        cart: []
      }

      async componentDidMount() {
        
        const user = await userService.getById(this.props.match.params.id)
        this.setState({user})
        const cart = await cartService.query()
        const userCart = cart.filter(miniCart=> miniCart.buyer._id === user._id)
        this.setState({
          cart : userCart
        })
      }

    render() {
        return (
            <div>
                {this.state.cart.map(miniCart => <h1 key={miniCart._id}>{miniCart.items[0].title}</h1>)}
            </div>
        )
    }
}


