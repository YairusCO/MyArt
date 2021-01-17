import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { appStoreService } from '../services/appStoreService.js'
import { ItemPreview } from './ItemPreview.jsx'

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


    render(){
      const { items, itemId } = this.props
      
      const item = items.find(item => item._id === itemId) || {}
console.log('haim', item);
        return (
            <section className="item-details">
        <div className="item-desc">
          <div className="right-desc">
            <h1>{item.title}</h1>
            <img src={ item.imgUrl } />
            <p>{item.author}</p>
          </div>
        </div>
      
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