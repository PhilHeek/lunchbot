import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import establishmentData from '../reducers/establishmentDataReducer';
import fetchingData from '../reducers/fetchingDataReducer';
import visibilityFilter from '../reducers/visibilityFilterReducer';

const reducers = combineReducers({ fetchingData, establishmentData, visibilityFilter });
const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
)
