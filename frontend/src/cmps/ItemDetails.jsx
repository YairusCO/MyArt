import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { appStoreService } from '../services/appStoreService'
import { ItemPreview } from './ItemPreview.jsx'
import { SellerItemList } from './SellerItemList.jsx'
import { SellerItemPreview } from './SellerItemPreview.jsx'
import { removeItem } from '../store/actions/itemActions.js'
import { orderService } from '../services/orderService'
import { cartService } from '../services/cartService'


export class _ItemDetails extends Component {
  state = {
    items: []
  }

  //   componentDidMount() {
  //     const itemId = this.props.match.params.itemId
  //     if (itemId) {
  //         const item = this.props.items
  //             .find(item => item._id === itemId)
  //         this.setState({ item })
  //     }
  // }
  // onRemoveItem = async itemId => {
  //   await this.props.removeItem(itemId)
  //   // this.props.history.push('/login')
  // }


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
    const { items, itemId } = this.props
    const item = items.find(item => item._id === itemId) || {}
    const sellerItems = items.filter(sellerItem => sellerItem.seller.fullname === item.seller.fullname) || {}
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
              <p>${item.price}</p>
              <p>{item.seller.fullname}</p>
              <div>

                <div className="items-btns">
                  <button className="btn-buy" onClick={() => {
                    this.onBuy([item])
                  }}>Buy</button>
                  <button className="btn-buy" onClick={() => {
                    this.onAddToCart([item])
                  }}>Add to cart</button>
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
  // loadItems,
  // // loadUsers,
  // // addItem,
  //  removeItem
}
export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails)