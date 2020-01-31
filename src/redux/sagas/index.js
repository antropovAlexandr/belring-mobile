import { all, takeLatest } from 'redux-saga/effects'
import { navigate, reset, goBack } from './navigationSaga'
import { login, logout } from './userActions'

import { NavigationTypes } from 'Redux/reducers/navigatorReducer'
import { UserTypes } from 'Redux/reducers/userReducer'

import API from 'services/api'

const api = API.create()

export default function* root() {
  yield all([
    takeLatest(NavigationTypes.NAVIGATE, navigate),
    takeLatest(NavigationTypes.RESET, reset),
    takeLatest(NavigationTypes.GO_BACK, goBack),

    takeLatest(UserTypes.LOGIN, login),
    takeLatest(UserTypes.LOGOUT, logout),
  ])
}
