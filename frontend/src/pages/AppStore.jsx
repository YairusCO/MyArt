import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { loadItems, addItem, removeItem } from '../store/actions/itemActions.js'
// import { loadUsers } from '../store/actions/userActions.js'
import {appStoreService} from '../services/appStoreService.js'
import { Link } from 'react-router-dom'
import { ItemList } from '../cmps/ItemList';
import { ItemPreview } from '../cmps/ItemPreview.jsx';
class _AppStore extends Component {
  // state = {
  //  itemToEdit: {
  //     txt: '',
  //     aboutUserId: ''
  //   }
  // }
  // componentDidMount() {
  //   this.props.loadItems()
  //   this.props.loadUsers()
  // }

  // handleChange = ev => {
  //   const { name, value } = ev.target
  //   this.setState(prevState => ({
  //    itemToEdit: {
  //       ...prevState.itemToEdit,
  //       [name]: value
  //     }
  //   }))
  // }

  // addItem = async ev => {
  //   ev.preventDefault()
  //   const {itemToEdit } = this.state
  //   if (!itemToEdit.txt || !itemToEdit.aboutUserId) return alert('All fields are required')
  //   await this.props.addItem(this.state.itemToEdit)
  //   this.setState({itemToEdit: { txt: '', aboutUserId: '' } })
  // }

  // onRemove = asyncitemId => {
  //   await this.props.removeItem(itemId)
  //   // this.props.history.push('/login')
  // }

  // canRemove =item =>
  //   (item.seller._id === this.props.loggedInUser?._id || this.props.loggedInUser?.isAdmin)

  render() {
  var items = appStoreService.query()
  console.log(items);
    return (
      <div className="appStore">
        <h1>MyArt Store</h1>

        <img src="../src/assets/imgs/hero.jpg" alt="hero"/>
        <ItemList items={items}>
                {items.map(item => <ItemPreview key={item._id} item={item} />)}
            </ItemList>

        {/* {this.props.items && <ul className="item-list">
          {this.props.items.map(item => (
            <li key={item._id}>
              { this.canRemove(item) &&
                <button onClick={() => this.onRemove(item._id)}>X</button>}
              <p>
                About:
                <Link to={`user/${item.aboutUser._id}`}>
                  {item.aboutUser.fullname}
                </Link>
              </p>
              <h3>{item.txt}</h3>

              <p>
                By:
                <Link to={`user/${item.seller._id}`}>
                  {item.seller.fullname}
                </Link>
              </p>
            </li>
          ))}
        </ul>}
        {this.props.users && this.props.loggedInUser &&
          <form onSubmit={this.addItem}>
            <select
              onChange={this.handleChange}
              value={this.state.itemToEdit.aboutUserId}
              name="aboutUserId"
            >
              <option value="">Select User</option>
              {this.props.users.map(user => (
                <option key={user._id} value={user._id}>
                  {user.fullname}
                </option>
              ))}
            </select>
            <textarea
              name="txt"
              onChange={this.handleChange}
              value={this.state.itemToEdit.txt}
            ></textarea>
            <button>Submit</button>
          </form>}
        <hr /> */}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//    items: state.itemModule.items,
//     users: state.userModule.users,
//     loggedInUser: state.userModule.loggedInUser
//   }
// }
// const mapDispatchToProps = {
//   loadItems,
//   loadUsers,
//   addItem,
//   removeItem
// } connect(mapStateToProps, mapDispatchToProps)

export const AppStore = (_AppStore)
