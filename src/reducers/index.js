import { combineReducers } from 'redux'
import establishment from './establishment'
import preferenceFilter from './preferenceFilter'

const lunchBot = combineReducers({
  establishment,
  preferenceFilter
})

export default lunchBot