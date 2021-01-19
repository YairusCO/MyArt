import React, { Component } from 'react'
import {userService} from '../services/userService'
import {orderService} from '../services/orderService'

export class UserDetails extends Component {
  state = {
    user : null,
    orders: []
  }
  async componentDidMount() {
    const user = await userService.getById(this.props.match.params.id)
    this.setState({user})
    const orders = await orderService.query()
    console.log('orders:', orders);
    console.log('user:', user);
    const userOrders = orders.filter(order => order.buyer._id === user._id)

    this.setState({
      orders : userOrders
    })
  }
  render() {
    return (
      <section className="user-details">
        <h1>User Details</h1>
        {this.state.user && <div>
          <h3>
            {this.state.user.fullname}
          </h3>
          {this.state.orders.map(order => <h1 key={order._id}>{order.items[0].title}</h1>)}
          <pre>
            {JSON.stringify(this.state.user, null, 2)}
          </pre>
        </div>}
      </section>
    )
  }
}

