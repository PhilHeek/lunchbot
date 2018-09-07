import ActionTypes from './actionTypes';
import { createAction } from 'redux-actions';

export default {
  AddEstablishment: createAction(ActionTypes.ADD_ESTABLISHMENT),
  clearEstablishment: createAction(ActionTypes.CLEAR_ESTABLISHMENT)
};
