import ActionTypes from './actionTypes';
import { createAction } from 'redux-actions';

export default {
  updateMap: createAction(ActionTypes.UPDATE_LOCATION)
};
