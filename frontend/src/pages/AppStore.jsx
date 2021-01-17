import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hero from '../assets/imgs/hero.jpg';
import { loadItems, addItem, removeItem, setFilter } from '../store/actions/itemActions.js'

// import { loadUsers } from '../store/actions/userActions.js'
import { appStoreService } from '../services/appStoreService.js'
import { itemService } from '../services/itemService.js'
import { Link } from 'react-router-dom'
import { ItemFilter } from '../cmps/ItemFilter'
import { ItemList } from '../cmps/ItemList';
import { ItemPreview } from '../cmps/ItemPreview.jsx';
class _AppStore extends Component {
  state = {
    filterBy: 'All',
    filterByTxt: ''
  }
  
  componentDidMount() {
    this.props.loadItems()
    //this.props.loadUsers()
  }

  onRemoveItem = async itemId => {
    await this.props.removeItem(itemId)
    // this.props.history.push('/login')
  }

  onSetFilter = (filterBy) => {
    this.props.setFilter(filterBy)
    this.props.loadItems(filterBy)

}
  onBuy(item) {
    const action = {
        type: 'BUY',
        item
    }
    this.props.dispatch(action)
}
  render() {
    var items = this.props.items;
    return (
      <React.Fragment>
      
      <div className="appStore">
        <img src={Hero} className="hero" alt="hero" className="hero-img" />
        <h1 className="store-name">MyArt Store</h1>
        <ItemFilter onSetFilter={this.onSetFilter} />

        <ItemList items={items}>
          {items.map(item => <ItemPreview key={item._id} item={item} onRemoveItem={this.onRemoveItem} />)}
        </ItemList>

      
      </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
   items: state.itemModule.items,
    // users: state.userModule.users,
    // loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
  loadItems,
  // loadUsers,
  // addItem,
   removeItem,
   setFilter
} 
export const AppStore = connect(mapStateToProps, mapDispatchToProps)(_AppStore)
