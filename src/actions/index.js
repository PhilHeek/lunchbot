import axios from 'axios'

export const REQUEST_ESTABLISHMENT = 'REQUEST_ESTABLISHMENT';
export const RECEIVE_ESTABLISHMENT = 'RECEIVE_ESTABLISHMENT';
export const ADD_ESTABLISHMENT = 'ADD_ESTABLISHMENT';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_ESTABLISHMENT = 'TOGGLE_ESTABLISHMENT';

export function fetchEstablishment() {
  return axios.get('//localhost:3000/establishment', {}, { 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json' })
    .then(data => {
      console.log(data.data);
      let name = data.data.name
      return {
        type: 'ADD_ESTABLISHMENT',
        id: nextEstablishmentId++,
        name
      }
    });
}

let nextEstablishmentId = 0
export const addEstablishment = (text) => {
  console.log('text: ', text);
  return {
    type: 'ADD_ESTABLISHMENT',
    id: nextEstablishmentId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleEstablishment = (id) => {
  return {
    type: 'TOGGLE_ESTABLISHMENT',
    id
  }
}