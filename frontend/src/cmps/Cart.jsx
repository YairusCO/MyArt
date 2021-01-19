// // const { connect } = ReactRedux;
// // import { clearCart, checkout, removeFromCart } from "../store/actions/itemActions.js";

// class _Cart extends React.Component {

//   // component private state:
//   state = {
//     isCartOpen: false
//   }
//   toggleCart = () => {
//     this.setState(prev => {
//       return { isCartOpen: !prev.isCartOpen }
//     })
//   }

//   render() {
//     const { cartItems } = this.props;
//     if (!cartItems.length) return null;

//     var cartLength = cartItems.reduce((acc, item) => acc + item.amount, 0)
//     var cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0)

//     return (
//       <section className="cart">
//         <button className="btn-cart" onClick={this.toggleCart}>
//           Your Cart <span>{cartLength}</span>
//         </button>
//         {this.state.isCartOpen && (
//           <div className="cart-container">
//             <h1>Your Cart</h1>
//             <ul className="cart-items">
//               {cartItems.map((item, idx) => (
//                 <li key={idx}>
//                   <p>{item.name}</p>
//                   <p>{item.price} 💰</p>
//                   <p>Amount: {item.amount}</p>
//                   <button onClick={() => { this.props.removeFromCart(item._id) }}>x</button>
//                 </li>
//               ))}
//             </ul>
//             <hr />
//             <p>Total: {cartTotal}</p>
//             <button onClick={this.props.clearCart}>Clear</button>
//             <button onClick={this.props.checkout}>Checkout</button>
//           </div>
//         )}
//       </section>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     cartItems: state.itemModule.cartItems
//   }
// }

// const mapDispatchToProps = {
//   clearCart,
//   removeFromCart,
//   checkout
// }

// export const Cart = connect(mapStateToProps, mapDispatchToProps)(_Cart);
