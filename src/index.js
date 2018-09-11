import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import location from './reducers/location';
import establishment from './reducers/establishment';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import { ThemeProvider } from 'styled-components';

const store = createStore(combineReducers({ location, establishment }), {}, composeWithDevTools());

const theme = {
  palette_green: {
    primary: '#003A21',
    secondary: '#008F52',
    background: '#00683B'
  },
  palette_blue: {
    primary: '#3B3274',
    secondary: '#201658',
    background: '#2B2265'
  },
  palette_red: {
    primary: '#FF634B',
    secondary: '#FF9B8B',
    background: '#FF7D69'
  }
}

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>, document.getElementById('app'));
