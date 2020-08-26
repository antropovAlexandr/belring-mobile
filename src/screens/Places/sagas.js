import { put, call, takeLatest, select } from 'redux-saga/effects'
import {
  loadUserPlacesRequest,
  loadUserPlacesSuccess,
  updateUserPlacesRequest,
  updateUserPlacesSuccess,
  userPlacesFailure,
} from './reducer'
import { navigate } from '../../navigator'
import { PLACES } from '../../screens/constants'
import { userIdSelector } from '../Login/selector'

function sagasWithClient(client) {
  function* loadUserPlaces({ payload }) {
    try {
      const { places } = yield call(client.getUser, { userId: payload })
      yield put(loadUserPlacesSuccess(places))
    } catch (e) {
      yield put(userPlacesFailure(e))
    }
  }

  function* saveUserPlace({ payload }) {
    try {
      const id = yield select(userIdSelector)
      yield call(client.setPlaces, { userId: id, places: payload })
      yield put(updateUserPlacesSuccess())
      yield call(navigate, PLACES)
    } catch (e) {
      yield put(userPlacesFailure(e))
    }
  }

  function* watchActions(): Generator<*, *, *> {
    yield takeLatest(loadUserPlacesRequest, loadUserPlaces)
    yield takeLatest(updateUserPlacesRequest, saveUserPlace)
  }

  return { watchActions }
}

export default sagasWithClient