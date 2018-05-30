import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { addToCart } from '../actions/itemActions';

export class ItemList extends Component {
  onClick = (item) => {
    this.props.dispatch(addToCart(item));
  }

  render(props) {
    return (
      <div className="App-itemList">
      {
        this.props.items.map(((item, index) => {
          return <Item item={item} key={index} onClick={this.onClick}/>
        }))
      }
         
      </div>   
    )
  }
}  
  
const mapStateToProps = (state) => {
  return {
    items: state.items
  }
};

export default connect(mapStateToProps)(ItemList);