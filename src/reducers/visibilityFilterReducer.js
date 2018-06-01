let initialState = {
    priceFilter: [],
  };

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRICE_FILTER':
      return Object.assign({}, state, { priceFilter: [...state.priceFilter, action.priceType] });

    case 'REMOVE_PRICE_FILTER':
      const newPriceFilter = state.priceFilter.filter((item) => item !== action.priceType);
      return { priceFilter: newPriceFilter };

    default:
      return state;
  }
}

export default visibilityFilter;
