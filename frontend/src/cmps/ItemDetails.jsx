import { connect } from 'react-redux'
import React, { Component } from 'react'
import { SellerItemList } from './SellerItemList.jsx'
import { SellerItemPreview } from './SellerItemPreview.jsx'
import { removeItem, loadItems } from '../store/actions/itemActions.js'
import { loadOrders, addOrder } from '../store/actions/orderActions.js'
import { BuyModal } from '../cmps/BuyModal'
import { cartService } from '../services/cartService'
import Button from '@material-ui/core/Button';
import heartRed from '../assets/imgs/heart-red.png';
import star from '../assets/imgs/star.png';


export class _ItemDetails extends Component {
  state = {
    item: null,
    items: [],
    orders: {
      item: [],
      userId: '',
    },
    modal: false,
    fileDownloadUrl: ''
  }

  componentDidMount() {
    this.props.loadItems()
    this.props.loadOrders()
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


  onPurchase = async (item) => {
    const { loggedInUser } = this.props
    try {
      this.setState({ modal: true });
      await this.props.addOrder({ user: loggedInUser, item })
      return item
    } catch (err) {
      console.log('Login First', err)
    }
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
    const { loggedInUser, items, orders } = this.props
    console.log(orders);

    const itemId = this.props.match.params.itemId
    const item = this.props.items.find(item => item._id === itemId)

    if (!item ) return <h1>loading..</h1>
    const sellerItems = items.filter(sellerItem => sellerItem.seller.fullname === item.seller.fullname)


    return (
      <section className="details-page main-container">
        <div className="details-page-container">
          <div className="item-container">
            <div className="title-container"><h1>{item.title}</h1></div>
            <div className="item-subcontainer">
              <div className="img-container">
                <img className="img-details" src={item.imgUrl} />
                <p><img className="profile-img" src={item.seller.imgUrl} alt="" />{item.seller.fullname}</p>
              </div>
              <div className="txt-container" >

                <p className="item-desc">{item.description}</p>
                {/* <p>{item.createdAt}</p> */}

                <p className="grey">Price: <span >${item.price}</span></p>
                <div className="items-btns">
                  <button className="icon-heart-btn" ><img className="icon-heart" src={heartRed} alt="" /></button>

                  <button className="btn" onClick={() => {
                    this.onPurchase(item)
                  }}>Continue with purchase</button>
                </div>
                {this.state.modal && orders.length > 0 && <BuyModal order={orders[orders.length-1]} loggedInUser={loggedInUser} />}
                {/* <button className="btn" onClick={() => {
                    this.onAddToCart([item])
                  }}>Add to cart</button> */}
                {/* <div className="details-reactions">
                    <Button className="heart-icon"><img src={heartRed} alt="" /></Button>
                  </div> */}
                <div className="item-reviews">
                  <p className="grey" >Comments: <span className="see-more">see more...</span>
                    {/* {item.reviews[0].txt} */}
                  </p>
                  <p className="grey p-star">Rating: <button className="star-btn">
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                  </button>
                    {/* {item.reviews[0].rate} */}
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="seller-items-container">
            <div><p>More by this artist....</p></div>
            <div className="seller-items ">
            <SellerItemList sellerItems={sellerItems}>
              {sellerItems.map(sellerItem => <SellerItemPreview key={sellerItem._id} sellerItem={sellerItem} />)}
            </SellerItemList>
            </div>
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
    loggedInUser: state.userModule.loggedInUser,
    orders: state.orderModule.orders
  }
}
const mapDispatchToProps = {
  loadItems,
  loadOrders,
  addOrder
}
export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails)