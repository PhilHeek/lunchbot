import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import location from './reducers/location';
import establishment from './reducers/establishment';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';

const store = createStore(combineReducers({ location, establishment }), {}, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
