import { combineReducers } from 'redux'
import establishments from './establishmentReducer'
import visibilityFilter from './visibilityFilter'

const establishmentApp = combineReducers({
  establishments,
  visibilityFilter
})

export default establishmentApp