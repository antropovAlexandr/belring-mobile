import { SagaIterator } from 'redux-saga'
import { put, call, takeLatest, select } from 'redux-saga/effects'

import { navigate } from '../../navigator/NavigationService'
import PATHS from '../../screens/constants'
import { Place } from '../../types'
import { userIdSelector } from '../Login/selector'

import {
  loadUserPlacesRequest,
  loadUserPlacesSuccess,
  updateUserPlacesRequest,
  updateUserPlacesSuccess,
  userPlacesFailure,
} from './reducer'

function sagasWithClient(client) {
  function* loadUserPlaces({ payload }: { payload: string }) {
    try {
      const { places } = yield call(client.getUser, { userId: payload })
      yield put(loadUserPlacesSuccess(places))
    } catch (e) {
      yield put(userPlacesFailure(e))
    }
  }

  function* saveUserPlace({ payload }: { payload: Place[] }) {
    try {
      const id = yield select(userIdSelector)
      yield call(client.setPlaces, { userId: id, places: payload })
      yield put(updateUserPlacesSuccess())
      yield call(navigate, PATHS.PLACES, {})
    } catch (e) {
      yield put(userPlacesFailure(e))
    }
  }

  function* watchActions(): SagaIterator<void> {
    yield takeLatest(loadUserPlacesRequest, loadUserPlaces)
    yield takeLatest(updateUserPlacesRequest, saveUserPlace)
  }

  return { watchActions }
}

export default sagasWithClient
