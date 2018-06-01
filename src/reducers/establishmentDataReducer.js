const establishmentData = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ESTABLISHMENT_DATA':
      return action.establishmentData;
    case 'UPDATE_RESTAURANT_DATA':
    default:
      return state
  }
}

export default establishmentData
