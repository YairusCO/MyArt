import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { appStoreService } from '../services/appStoreService'
import { ItemPreview } from './ItemPreview.jsx'
import { removeItem } from '../store/actions/itemActions.js'
import Button from '@material-ui/core/Button';

export class _ItemDetails extends Component {
    state = {
        item: null
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

    render(){
      const { items, itemId } = this.props
      const item = items.find(item => item._id === itemId) || {}
        return (
            <section className="details-page">

<div className="item-container">
  <div className="img-container">
  <img src={ item.imgUrl } />
  </div>
  <div className="txt-container" >
  <h1>{item.title}</h1>
  <p>Description: {item.description}</p>
  <p>Price: {item.price}$</p>
  <p>Artist: {item.seller.fullname}</p>
  <div>
  <Button>Edit</Button>
  <Button>Add</Button>
  <Button>Save</Button>
  </div>
  {/* <Button onClick={() => { this.onRemoveItem(item._id) }}>Delete</Button> */}
</div></div>
      
      </section>
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
  // loadItems,
  // // loadUsers,
  // // addItem,
  //  removeItem
} 
export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails)