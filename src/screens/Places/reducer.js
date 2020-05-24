import { createAction, handleActions } from 'redux-actions';

export const loadUserPlacesRequest = createAction('LOAD_USER_PLACES_REQUEST');
export const loadUserPlacesSuccess = createAction('LOAD_USER_PLACES_SUCCESS');
export const updateUserPlacesRequest = createAction('UPDATE_USER_PLACES_REQUEST');
export const updateUserPlacesSuccess = createAction('UPDATE_USER_PLACES_SUCCESS');
export const userPlacesFailure = createAction('USER_PLACES_FAILURE');


export const initialState = {
    items: null,
    loading: false,
    error: null,
};

export default handleActions(
    {
        [loadUserPlacesRequest]: state => ({...state, items: null, loading: true, error: null,}),
        [loadUserPlacesSuccess]: (state, action) => ({...state, loading: false, items: action.payload }),
        [updateUserPlacesRequest]: state => ({...state, loading: true, error: null }),
        [updateUserPlacesSuccess]: state => ({...state, loading: false }),
        [userPlacesFailure]: (state, action) => ({...state, loading: false,  error: action.payload }),
    },
    initialState,
);
