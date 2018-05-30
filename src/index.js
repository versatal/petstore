import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import itemsReducer from './reducers/itemReducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(itemsReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();