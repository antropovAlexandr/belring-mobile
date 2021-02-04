import { SagaIterator } from 'redux-saga'
import { put, call, takeLatest, select, takeLeading } from 'redux-saga/effects'

import { navigate } from '../../navigator/NavigationService'
import PATHS from '../constants'

import {
  loginUserRequest,
  loginUserSuccess,
  registrationUserRequest,
  registrationUserSuccess,
  resetPasswordRequest,
  resetPasswordSuccess,
  updateUserEmailRequest,
  updateUserEmailSuccess,
  updateUserPasswordRequest,
  updateUserPasswordSuccess,
  updateUserPersonalDataRequest,
  updateUserPersonalDataSuccess,
  userFailure,
} from './reducer'
import { userIdSelector } from './selector'

function sagasWithClient(client) {
  function* updateEmail({ payload }) {
    const { email, password } = payload
    try {
      const id = yield select(userIdSelector)
      yield call(client.updateEmail, { userId: id, email, password })
      yield put(updateUserEmailSuccess())
    } catch (e) {
      yield put(userFailure(e))
    }
  }

  function* updatePassword({ payload }) {
    const { password, newPassword } = payload
    try {
      const id = yield select(userIdSelector)
      yield call(client.updatePassword, { userId: id, password, newPassword })
      yield put(updateUserPasswordSuccess())
    } catch (e) {
      yield put(userFailure(e))
    }
  }

  function* updatePersonalDate({ payload }) {
    const { firsName, lastName, phone } = payload
    try {
      const id = yield select(userIdSelector)
      yield call(client.updateUser, { userId: id, firsName, lastName, phone })
      yield put(updateUserPersonalDataSuccess())
    } catch (e) {
      yield put(userFailure(e))
    }
  }

  function* login({ payload }) {
    const { email, password } = payload
    try {
      const { token, refreshToken, user } = yield call(client.logIn, { email, password })
      const { id, role, firstName, lastName } = user
      yield put(loginUserSuccess({ token, refreshToken, id, role, email: user.email, firstName, lastName }))
      yield call(navigate, PATHS.PLACES, {})
    } catch (e) {
      yield put(userFailure(e))
    }
  }

  function* registration({ payload }) {
    const { email, password, firstName, lastName, phone } = payload
    try {
      const { token, refreshToken, user } = yield call(client.registration, {
        email,
        password,
        firstName,
        lastName,
        phone,
      })
      yield put(registrationUserSuccess({ token, refreshToken, ...user }))
      yield put(loginUserSuccess({ token, refreshToken, ...user }))
      yield call(navigate, PATHS.REGISTRATION_NOTIFICATION_SCREEN, { origin: 'registration' })
    } catch (e) {
      yield put(userFailure(e))
    }
  }

  function* resetPassword({ payload }) {
    const { email } = payload
    try {
      yield call(client.resetPassword, { email })
      yield put(resetPasswordSuccess())
      yield call(navigate, PATHS.REGISTRATION_NOTIFICATION_SCREEN, { origin: 'passwordRecovery' })
    } catch (e) {
      yield put(userFailure(e))
    }
  }

  function* watchActions(): SagaIterator<void> {
    yield takeLatest(loginUserRequest, login)
    yield takeLatest(registrationUserRequest, registration)
    yield takeLatest(resetPasswordRequest, resetPassword)
    yield takeLatest(updateUserEmailRequest, updateEmail)
    yield takeLatest(updateUserPasswordRequest, updatePassword)
    yield takeLeading(updateUserPersonalDataRequest, updatePersonalDate)
  }

  return { watchActions }
}

export default sagasWithClient
