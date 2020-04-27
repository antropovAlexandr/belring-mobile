import {put, call, takeLatest, select, delay} from 'redux-saga/effects';
import {ObservationActions, ObservationTypes} from '../reducers/observationReducer'
import {userTokenSelector} from "../../selectors/userSelector";

function sagasWithClient(client) {

    function* createObservation({ values, successAction }) {
        try {
            const token = yield select(userTokenSelector);
            yield delay(4000);
            // const data = yield call(client.createObservation, { lang, token });
            yield put(ObservationActions.addObservationSuccess());
            yield call(successAction);
        } catch (e) {
            yield put(ObservationActions.observationError(e));
        }
    }

    function* watchActions() {
        yield takeLatest(ObservationTypes.ADD_OBSERVATION_REQUEST, createObservation);
    }

    return {createObservation, watchActions};
}

export default sagasWithClient;
