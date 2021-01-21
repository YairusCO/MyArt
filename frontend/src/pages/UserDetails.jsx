import React, { Component } from 'react'
import { connect } from 'react-redux'
import {userService} from '../services/userService'
import {orderService} from '../services/orderService'
import {appStoreService} from '../services/appStoreService'
import { removeItem, loadItems } from '../store/actions/itemActions.js'
import { SellerItemList } from '../cmps/SellerItemList'
import { SellerItemPreview } from '../cmps/SellerItemPreview.jsx'



export class _UserDetails extends Component {
  state = {
    user : null,
    orders: [],
    items: [],
  }
  async componentDidMount() {
    // console.log('user', this.loggedInUser);
    this.props.loadItems()
    // this.props.loadItems()
    const user = await userService.getById(this.props.match.params.id)
    this.setState({user})
    const item = await appStoreService.getById(this.props.match.params.id)
    this.setState({item})
    // const orders = await orderService.query()
    // console.log('orders:', orders);
    // console.log('user:', user);
    // const userOrders = orders.filter(order => order.buyer._id === user._id)
    // this.setState({
    //   orders : userOrders
    // })
  }
  render() {
    const { loggedInUser } = this.props;
    const { items } = this.props
    const { item } = this.state
    const itemId = this.state.user?._id
    // console.log('user: ',loggedInUser);
    const sellerItems = items.filter(sellerItem => sellerItem.seller.fullname === loggedInUser.fullname)
    console.log('details', sellerItems);
    return (
      <section className="user-details">
        {this.state.user && <div>
          <img className="user-profile" src={this.state.user.imgUrls.profile} alt=""/>
          <h3 className="user-name">
            {this.state.user.fullname}
          </h3>
          <p className="user-desc">"{this.state.user.description}"</p>
          <div>My Art:</div>
          <div className="seller-items">
            <SellerItemList sellerItems={sellerItems}>
              {sellerItems.map(sellerItem => <SellerItemPreview key={sellerItem._id} sellerItem={sellerItem} />)}
            </SellerItemList>
          </div>
          {this.state.orders.map(order => <h1 key={order._id}>{order.items[0].title}</h1>)}
        </div>}
      </section>
    )
  }
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
  // // loadUsers,
  // // addItem,
  //  removeItem
}
export const UserDetails = connect(mapStateToProps, mapDispatchToProps)(_UserDetails)