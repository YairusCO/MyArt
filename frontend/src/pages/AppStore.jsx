import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadItems, addItem, removeItem, setFilter } from '../store/actions/itemActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { appStoreService } from '../services/appStoreService.js'
import { orderService } from '../services/orderService'
import { cartService } from '../services/cartService'
import { Link } from 'react-router-dom'
import { ItemFilter } from '../cmps/ItemFilter'
import { ItemList } from '../cmps/ItemList';
import { ItemPreview } from '../cmps/ItemPreview.jsx';
import { Cart } from '../cmps/Cart.jsx'
// import Hero from '../assets/imgs/hero.jpg';
import { HeroPic } from '../cmps/Hero'

class _AppStore extends Component {
  state = {
    filterBy: { title: '', artist1: 'Harel Malachi', artist2: 'Eliran Kadosh', artist3: 'Inbal Azmon' },
    items: [],
    cart: []
    // filterByTxt: ''
  }

  componentDidMount() {
    this.props.loadItems()
    this.props.loadUsers()
    
    // this.onLoadItems()

  }

  // onLoadItems() {
  //   appStoreService.query(this.state.filterBy)
  //     .then(items => {
  //       this.setState({ items })
  //     })

  // }
  onRemoveItem = async itemId => {
    await this.props.removeItem(itemId)
    // this.props.history.push('/login')
  }


  handleInput = ({ target: { name, value, type } }) => {
    const modValue = (type === 'number') ? parseInt(value) : value  //'margad'
    this.setState(prevState => {
      return {
        filterBy: {
          ...prevState.filterBy, // title:''
          [name]: modValue  //title:'margad'
        }

      }
    }, () => {
      //  await this.props.setFilter(this.state.filterBy);
      this.props.loadItems(this.state.filterBy);
    })

  }

  handleArtist = ({ target }) => {
    const field = target.name
    const value = (target.type === 'artist') ? parseInt(target.value) : target.value

    this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
        this.props.onSetFilter(this.state.filterBy)
    })
}

  //   onSetFilter = (filterBy) => {
  //     this.props.setFilter(filterBy)
  //     this.props.loadItems(filterBy)

  // }
  onBuy = (items) => {
    var order = orderService.add(this.props.loggedInUser, items)
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
  // getItems() {

  //   const items = this.props.items
  //   const filter = this.props.filterBy
  //   console.log(items)
  //   console.log(filter)
  // }
  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        <HeroPic />
        <div className="appStore">
          {/* <Cart /> */}
          <ItemFilter handleInput={this.handleInput} />

          <ItemList items={items} onBuy={this.onBuy} onAddToCart={this.onAddToCart} onRemoveItem={this.onRemoveItem} />
          {/* {items.map(item => <ItemPreview key={item._id} item={item} onRemoveItem={this.onRemoveItem} />)}
          </ItemList> */}
          {/* <ItemList items={items}>
          </ItemList> */}

        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemModule.items,
    users: state.userModule.users,
    loggedInUser: state.userModule.loggedInUser,
    filterBy: state.itemModule.filterBy
  }
}
const mapDispatchToProps = {
  loadItems,
  loadUsers,
  // addItem,
  removeItem,
  setFilter
}
export const AppStore = connect(mapStateToProps, mapDispatchToProps)(_AppStore)
