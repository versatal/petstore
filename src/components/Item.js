import React, { Component } from 'react';
import numeral from 'numeral';

export class Item extends Component {
  onClick = () => {
    this.props.onClick(this.props.item)
  }
  render() {
    return (
      <div className="itemCard">
        <p>{this.props.item.name}</p>
        <img src={this.props.item.picture} alt={this.props.item.altText}></img>
        <p>{numeral(this.props.item.price).format('$0,0.00')}</p>
        <a href="item1.js">See More!</a>
        <button type="button"
        onClick={this.onClick}
        >BUY</button>
      </div>   
    )
  }
}

export default Item;