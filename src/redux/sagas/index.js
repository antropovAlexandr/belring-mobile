import {all, takeLatest} from 'redux-saga/effects'
import {navigate, reset, goBack} from './navigationSaga'
import usersSagasWithClient from './userSagas';
import placesSagasWithClient from './placesSagas';
import initialDataSagasWithClient from './initialDataSagas';
import observationSagasWithClient from './observationSagas';

import {NavigationTypes} from '../reducers/navigatorReducer'

import * as api from '../../services/api'

export default function* root() {
    yield all([
        takeLatest(NavigationTypes.NAVIGATE, navigate),
        takeLatest(NavigationTypes.RESET, reset),
        takeLatest(NavigationTypes.GO_BACK, goBack),
        usersSagasWithClient(api).watchActions(),
        placesSagasWithClient(api).watchActions(),
        initialDataSagasWithClient(api).watchActions(),
        observationSagasWithClient(api).watchActions(),
    ])
}
