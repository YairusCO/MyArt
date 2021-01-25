import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { removeItem, loadItems } from '../store/actions/itemActions.js'
import { loadOrders, addOrder } from '../store/actions/orderActions.js'
import { BuyModal } from '../cmps/BuyModal'


export class _ThankYou extends Component {


    componentDidMount() {

        this.props.loadItems()
        this.props.loadOrders()
      }

    render() {
    return (
        <div className="thank-you">
            <h1>Thank you for the purchase</h1>
            <p>Order Details:</p>
            <Button>You can download you image here <a href={order.item.imgUrl} title={order.item.title}>
            </a></Button>
        </div>
    )}
}
const mapStateToProps = state => {
    return {
      items: state.itemModule.items,
      users: state.userModule.users,
      loggedInUser: state.userModule.loggedInUser
    }
  }
  const mapDispatchToProps = {
    loadItems,
    loadOrders,
    addOrder
  }
  export const ThankYou = connect(mapStateToProps, mapDispatchToProps)(_ThankYou)