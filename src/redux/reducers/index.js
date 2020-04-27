import {combineReducers} from 'redux'
import {createNavigationReducer} from 'react-navigation-redux-helpers'
import AppNavigator from 'Navigator/index'
import {reducer as userReducer} from './userReducer'
import {reducer as placesReducer} from './placesReducer'
import {reducer as initialDataReducer} from './initialDataReducer'
import {reducer as observationReducer} from './observationReducer'

const navigatorReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
    navigatorReducer: navigatorReducer,
    user: userReducer,
    places: placesReducer,
    initialData: initialDataReducer,
    observation: observationReducer,
})
