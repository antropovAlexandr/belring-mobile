import { all, takeLatest } from 'redux-saga/effects'
import { navigate, reset, goBack } from './navigationSaga'
import usersSagasWithClient from './userSagas';

import { NavigationTypes } from '../reducers/navigatorReducer'
import { UserTypes } from '../reducers/userReducer'

import * as api from '../../services/api'

export default function* root() {
  yield all([
    takeLatest(NavigationTypes.NAVIGATE, navigate),
    takeLatest(NavigationTypes.RESET, reset),
    takeLatest(NavigationTypes.GO_BACK, goBack),
    usersSagasWithClient(api).watchActions()
  ])
}
