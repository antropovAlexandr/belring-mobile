import { put, call, takeLatest, delay } from 'redux-saga/effects'

import {
  addObservationRequest,
  addObservationSuccess,
  loadInitialDataRequest,
  loadInitialDataSuccess,
  loadObservationsRequest,
  loadObservationsSuccess,
  observationFailure,
} from './reducer'

function sagasWithClient(client) {
  function* loadObservations() {
    try {
      const { content, totalElements } = yield call(client.getObservations)
      yield put(loadObservationsSuccess({ observations: content, totalElements }))
    } catch (e) {
      yield put(observationFailure(e))
    }
  }

  function* createObservation({ observation, successAction }) {
    try {
      // yield delay(4000);
      const data = yield call(client.createObservation, { observation })
      yield put(addObservationSuccess())
      yield call(successAction)
    } catch (e) {
      yield put(observationFailure(e))
    }
  }

  function* loadInitialData({ payload }) {
    try {
      const data = yield call(client.getInitialData, { lang: payload })
      yield put(loadInitialDataSuccess(data))
    } catch (e) {
      yield put(observationFailure(e))
    }
  }

  function* watchActions() {
    yield takeLatest(loadObservationsRequest, loadObservations)
    yield takeLatest(addObservationRequest, createObservation)
    yield takeLatest(loadInitialDataRequest, loadInitialData)
  }

  return { watchActions }
}

export default sagasWithClient
