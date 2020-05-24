import { all } from 'redux-saga/effects'
import userSagasWithClient from './screens/Login/sagas';
import observationSagasWithClient from './screens/Observations/sagas';
import placesSagasWithClient from './screens/Places/sagas';

import * as api from './services/api'

export default function* root() {
    yield all([
        userSagasWithClient(api).watchActions(),
        observationSagasWithClient(api).watchActions(),
        placesSagasWithClient(api).watchActions(),
    ])
}
