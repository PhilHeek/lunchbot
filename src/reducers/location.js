import { handleActions } from 'redux-actions';

const initialState = {
    address: undefined,
    lat: 48.862334,
    lng: 2.350453
  //selected: undefined
};


export const location = handleActions(
  {
    UPDATE_LOCATION: (state, { payload }) => ({
      address: payload.address,
      lat: payload.lat,
      lng: payload.lng
    })
  }, initialState
);
