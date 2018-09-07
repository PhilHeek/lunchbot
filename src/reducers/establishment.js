import { handleActions } from 'redux-actions';
import ActionTypes from '../actions/actionTypes';

export default handleActions({
    [ActionTypes.ADD_ESTABLISHMENT]: (state, action) => {
      return [...state, {address: action.payload.estAddress,
                  name: action.payload.estName,
                  isClose: action.payload.estIsClose,
                  lat: action.payload.estLatitude,
                  lng: action.payload.estLongitude }];
    },

    [ActionTypes.CLEAR_ESTABLISHMENT]: (state) => []
  }, []);
