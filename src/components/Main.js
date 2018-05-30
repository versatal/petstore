import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import About from '../components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;