import React, { Component } from 'react';
import ItemList from './ItemList';
import ShoppingCartList from './ShoppingCartList';

class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <ItemList />
        <ShoppingCartList />
      </div>
    )
  }
}

export default Home;