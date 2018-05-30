import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import App from '../components/App';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default AppRouter;