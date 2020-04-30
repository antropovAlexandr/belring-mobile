import { all } from 'redux-saga/effects'
import usersSagasWithClient from './userSagas';
import placesSagasWithClient from './placesSagas';
import initialDataSagasWithClient from './initialDataSagas';
import observationSagasWithClient from './observationSagas';

import * as api from '../../services/api'

export default function* root() {
    yield all([
        usersSagasWithClient(api).watchActions(),
        placesSagasWithClient(api).watchActions(),
        initialDataSagasWithClient(api).watchActions(),
        observationSagasWithClient(api).watchActions(),
    ])
}
