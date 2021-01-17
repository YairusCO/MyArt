import React, { Component } from 'react'
import { connect } from 'react-redux'
class _Cart extends React.Component {
  
  // component private state:
  state = {
    isCartOpen: false
  }
  toggleCart = () => {
    this.setState(prev => {
      return { isCartOpen: !prev.isCartOpen }
    });
  }

  render() {
    // const { cartItems } = this.props;
    // if (!cartItems) return null;
    return (
      <section>
        <div className="cart-container">
            <p>🛒</p>
            </div>
      </section>

    );
  }
}

        /* <button onClick={this.toggleCart}>
          Your Cart {cartItems.length}
        </button>
        {this.state.isCartOpen && (
    
            <ul className="cart-items">
              {cartItems.map((item,idx) => (
                <li key={idx}>
                  <p>
                    {item.name} $ {item.price}
                  </p>
                  <button onClick={()=>this.props.dispatch({type: 'REMOVE_FROM_CART', itemId: item._id})}>x</button>
                </li>
              ))}
            </ul>
          </div>
        )} */

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems
  };
};
const mapDispatchToProps = {}
export const Cart = connect(mapStateToProps)(_Cart);
