import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const {Types, Creators} = createActions({
    addObservationRequest: ['values', 'successAction'],
    addObservationSuccess: ['data'],
    observationError: ['error'],
});

const addObservationRequest = (state) => ({...state, loading: true});
const addObservationSuccess = (state, { data }) => ({ ...state, loading: false, data: { ...data }});
const observationError = (state, { error }) => ({...state, loading: false, error});

export const reducer = createReducer(initialState, {
    [Types.ADD_OBSERVATION_REQUEST]: addObservationRequest,
    [Types.ADD_OBSERVATION_SUCCESS]: addObservationSuccess,
    [Types.OBSERVATION_ERROR]: observationError,
});

export {Types as ObservationTypes, Creators as ObservationActions}
