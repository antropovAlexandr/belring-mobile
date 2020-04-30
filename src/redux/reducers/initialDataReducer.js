import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const {Types, Creators} = createActions({
    initialDataRequest: [],
    initialDataSuccess: ['data'],
    initialDataError: ['error'],
});

const initialDataRequest = (state) => ({...state, loading: true});
const initialDataSuccess = (state, { data }) => ({ ...state, loading: false, data: { ...data }});
const initialDataError = (state, { error }) => ({...state, loading: false, error});

export const reducer = createReducer(initialState, {
    [Types.INITIAL_DATA_REQUEST]: initialDataRequest,
    [Types.INITIAL_DATA_SUCCESS]: initialDataSuccess,
    [Types.INITIAL_DATA_ERROR]: initialDataError,
});

export {Types as InitialDataTypes, Creators as InitialDataActions}
