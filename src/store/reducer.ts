import { combineReducers } from 'redux'

import userReducer from '../screens/Login/reducer'
import observationReducer from '../screens/Observations/reducer'
import placesReducer from '../screens/Places/reducer'

export default combineReducers({
  observation: observationReducer,
  user: userReducer,
  places: placesReducer,
})
