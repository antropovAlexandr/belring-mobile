import {combineReducers} from 'redux'
import {createNavigationReducer} from 'react-navigation-redux-helpers'
import AppNavigator from 'Navigator/index'
import {reducer as userReducer} from './userReducer'
import {reducer as placesReducer} from './placesReducer'

const navigatorReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
    navigatorReducer: navigatorReducer,
    user: userReducer,
    places: placesReducer,
})
