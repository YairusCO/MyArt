import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadItems, addItem, removeItem, setFilter } from '../store/actions/itemActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { orderService } from '../services/orderService'
import { cartService } from '../services/cartService'
import { ItemFilter } from '../cmps/ItemFilter'
import { ItemList } from '../cmps/ItemList';
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


  }

  onRemoveItem = async itemId => {
    await this.props.removeItem(itemId)
    // this.props.history.push('/login')
  }


  handleInput = ({ target: { name, value, type } }) => {
    const modValue = (type === 'number') ? parseInt(value) : value
    this.setState(prevState => {
      return {
        filterBy: {
          ...prevState.filterBy,
          [name]: modValue
        }

      }
    }, () => {

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


  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        <HeroPic />
        <div className="appStore">
          {/* <Cart /> */}
          <ItemFilter handleInput={this.handleInput} />

          <ItemList items={items} onBuy={this.onBuy} onAddToCart={this.onAddToCart} onRemoveItem={this.onRemoveItem} />


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
