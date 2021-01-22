import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { appStoreService } from '../services/appStoreService'
import { SellerItemList } from './SellerItemList.jsx'
import { SellerItemPreview } from './SellerItemPreview.jsx'
import { removeItem, loadItems } from '../store/actions/itemActions.js'
import { loadOrders, addOrder } from '../store/actions/orderActions.js'
import { orderService } from '../services/orderService'
import { cartService } from '../services/cartService'
import Button from '@material-ui/core/Button';

export class _ItemDetails extends Component {
  state = {
    item: null,
    items: [],
    order: {
      item: [],
      userId: '',
    },
  }

  componentDidMount() {

    this.props.loadItems()
    this.props.loadOrders()
    console.log('Items from store:', this.props.items)

    const itemId = this.props.match.params.itemId
    if (itemId) {
      const item = this.props.items.find(item => item._id === itemId)
      console.log('item from find CDM', item)
      this.setState({ item }, () => {

        console.log('item local state', this.state.item)
      })
    }

  }

  // onRemoveItem = async itemId => {
  //   await this.props.removeItem(itemId)
  //   // this.props.history.push('/login')
  // }

  // addOrder = async ev => {
  //   ev.preventDefault()
  //   const { order } = this.state
  //   if (!order.items || !order.userId) return alert('All fields are required')
  //   await this.props.addOrder(this.state.order)
  //   this.setState({ order: { items: [], userId: '' } })
  // }
  onPurchase = async (item) => {
    const { loggedInUser } = this.props
    
    try {
      console.log('Ze Kara!!!!')
      await this.props.addOrder({ user: loggedInUser, item })
      return item

    } catch (err) {
      console.log('Ze Kara!!!!-basa')
    }
  }

  onBuy = (item) => {
    var order = orderService.add(this.props.loggedInUser, item)
    console.log('this order', order)
    // const action = {
    //   type: 'BUY',
    //   item
    // }
    // this.props.dispatch(action)
  }

  onAddToCart = (items) => {
    var cart = cartService.add(this.props.loggedInUser, items)
    console.log('this cart', cart)
    // push item to cart
    items.push()
    // on checkout call onBuy
    // send this.state.cart as the items
  }

  render() {
    const { items } = this.props
    const { loggedInUser } = this.props
    console.log('loggedInUser', loggedInUser);

    const itemId = this.props.match.params.itemId
    // const itemId = this.state.item?._id
    const item = this.props.items.find(item => item._id === itemId)
    // const { item } = this.state
    if (!item) return <h1>loading..</h1>

    console.log('props');

    const sellerItems = items.filter(sellerItem => sellerItem.seller.fullname === item.seller.fullname)
    console.log('details', sellerItems);


    return (
      <section className="details-page main-container">
        <div className="details-page-container">
          <div className="item-container">
            <div className="img-container">
              <img className="img-details" src={item.imgUrl} />
            </div>
            <div className="txt-container" >
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.createdAt}</p>
              <p><img className="profile-img" src={item.seller.imgUrl} alt="" />{item.seller.fullname}</p>
              <p>${item.price}</p>
              <div className="items-btns">
                {/* <button className="btn-buy" onClick={() => {
                  this.onBuy([item])
                }}>Buy</button> */}
                    <button className="btn-buy" onClick={() => {
                  this.onPurchase(item)
                }}>Buy</button>
                <button className="btn-buy" onClick={() => {
                  this.onAddToCart([item])
                }}>Add to cart</button>
                <div className="details-reactions">
                  <Button>❤️</Button>
                  <Button>👍</Button>
                </div>
                <div className="item-reviews">
                  <p>Review: {item.reviews[0].txt}</p>
                  <p>Rating: {item.reviews[0].rate}</p>
                </div>
              </div>
            </div>
          </div>
          <div>More by this artist....</div>
          <div className="seller-items">
            <SellerItemList sellerItems={sellerItems}>
              {sellerItems.map(sellerItem => <SellerItemPreview key={sellerItem._id} sellerItem={sellerItem} />)}
            </SellerItemList>
          </div>
        </div>

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
  loadOrders,
  addOrder
  // // loadUsers,
  // // addItem,
  //  removeItem
}
export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails)