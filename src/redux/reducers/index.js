import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from 'Navigator/index'
import { reducer as userReducer } from './userReducer'

const navigatorReducer = createNavigationReducer(AppNavigator)

export default combineReducers({
  navigatorReducer: navigatorReducer,
  userReducer,
})
