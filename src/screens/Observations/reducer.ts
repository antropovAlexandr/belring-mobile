import { createAction, handleActions } from 'redux-actions'

export const loadObservationsRequest = createAction('LOAD_OBSERVATIONS_REQUEST')
export const loadObservationsSuccess = createAction('LOAD_OBSERVATIONS_SUCCESS')
export const addObservationRequest = createAction('ADD_OBSERVATIONS_REQUEST')
export const addObservationSuccess = createAction('ADD_OBSERVATIONS_SUCCESS')
export const loadInitialDataRequest = createAction('LOAD_OBSERVATIONS_INITIAL_DATA_REQUEST')
export const loadInitialDataSuccess = createAction('LOAD_OBSERVATIONS_INITIAL_DATA_SUCCESS')
export const observationFailure = createAction('OBSERVATIONS_FAILURE')

export const initialState = {
  items: null,
  totalElements: 0,
  initialData: null,
  loading: false,
  error: null,
}

export default handleActions(
  {
    [loadObservationsRequest]: () => ({ ...initialState, loading: true }),
    [loadObservationsSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      items: payload.observations,
      totalElements: payload.totalElements,
    }),
    [addObservationRequest]: (state) => ({ ...state, loading: true, error: null }),
    [addObservationSuccess]: (state) => ({ ...state, loading: false }),
    [loadInitialDataRequest]: (state) => ({ ...state, loading: true, error: null }),
    [loadInitialDataSuccess]: (state, { payload }) => ({ ...state, loading: false, initialData: payload }),
    [observationFailure]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  },
  initialState
)
