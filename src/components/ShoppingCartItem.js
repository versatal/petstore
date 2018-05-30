import React, { Component } from 'react';

export class ShoppingCartItem extends Component {
  onClick = () => {
    this.props.onClick(this.props.item.id)
  }
    
  render() {
    return (
      <li>{this.props.item.name} <button onClick={this.onClick}>X</button></li>
    )
  }

}

export default ShoppingCartItem;