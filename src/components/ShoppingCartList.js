import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/itemActions';
import ShoppingCartItem from './ShoppingCartItem';
import numeral from 'numeral';

export class ShoppingCart extends Component {
  onClick = (id) => {    
    this.props.dispatch(removeFromCart(id));
  }
  
  render(props) {
    return (
      <div className="App-shoppingCart">
      <h4>Your Shopping Cart</h4>
          {      
        this.props.cart.length < 1 
        ? (
          <p>Your Cart Is Empty!</p>
        ) : (
          <div>
          <ul>
            {this.props.cart.map((cartItem, index) => {
              return <ShoppingCartItem key={index} item={cartItem} onClick={this.onClick}/>
            })}
            </ul>
            <p>Total: 
              {numeral(this.props.cart.reduce((accumulator, currentValue, currentIndex, array) => 
              accumulator + currentValue.price, 0)).format('$0,0.00')}
            </p>
            <button>Check Out</button>
          </div>    
        )}
    </div>
  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart 
  }
};

export default connect(mapStateToProps)(ShoppingCart);