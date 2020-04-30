import {combineReducers} from 'redux'
import {reducer as userReducer} from './userReducer'
import {reducer as placesReducer} from './placesReducer'
import {reducer as initialDataReducer} from './initialDataReducer'
import {reducer as observationReducer} from './observationReducer'

export default combineReducers({
    user: userReducer,
    places: placesReducer,
    initialData: initialDataReducer,
    observation: observationReducer,
})
