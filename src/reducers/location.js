import { handleActions } from 'redux-actions';
import ActionTypes from '../actions/actionTypes';

const initialState = {
    address: undefined,
    lat: 48.862334,
    lng: 2.350453
  //selected: undefined
};


export default handleActions(
  {
    [ActionTypes.UPDATE_LOCATION]: (state, { payload }) => ({
      address: payload.address,
      lat: payload.lat,
      lng: payload.lng
    })
  }, initialState
);
