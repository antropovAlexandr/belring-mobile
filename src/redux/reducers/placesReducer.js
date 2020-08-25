import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const {Types, Creators} = createActions({
    loadPlacesRequest: [],
    loadPlacesSuccess: ['token', 'refreshToken'],
});

const loadPlacesRequest = (state) => ({...state, loading: true});

export const reducer = createReducer(initialState, {
    [Types.LOAD_PLACES_REQUEST]: loadPlacesRequest,
});

export {Types as PlacesTypes, Creators as PlacesActions}
