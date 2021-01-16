import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { appStoreService } from '../services/appStoreService.js'
import { ItemPreview } from './ItemPreview.jsx'

export class _ItemDetails extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        // this.loadItems;
    }

    loadItems = async () => {
        console.log(item)
        const { itemId } = this.props.match.params
        const item = await appStoreService.getById(itemId)
        this.setState({ item })
    
      }

    render(){


        return (
            <section className="item-details">
        <div className="item-desc">
          <div className="right-desc">
            {/* <h1>{item.title}</h1>
            <img src={ item.imgUrl } /> */}
          </div>
          {/* <div className="left-desc">
           
            
          </div>
        </div>
        <div className="details-btn">
          {loggedInUser.isAdmin && <button onClick={() => this.onRemove(toy._id)} className="delete-btn">Delete</button>}
          {loggedInUser.isAdmin && <button className="edit-btn"><Link to={`/toy/edit/${toy._id}`}>Edit</Link></button>} */}
        </div>
      
      </section>
        )
    }
}


const mapStateToProps = state => {
    return {
      items: state.itemModule
    //   loggedInUser: state.userModule.loggedInUser,
    }
  }
  
  const mapDispatchToProps = {
    
    // loadItems,
  }
  
  export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails);

