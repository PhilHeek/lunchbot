export const addPriceFilter = (priceType) => {
  return {
    type: 'ADD_PRICE_FILTER', priceType
  }
}

export const removePriceFilter = (priceType) => {
  return {
    type: 'REMOVE_PRICE_FILTER', priceType
  }
}
