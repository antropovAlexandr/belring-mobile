import {put, call, takeLatest} from 'redux-saga/effects';
import {InitialDataActions, InitialDataTypes} from '../reducers/initialDataReducer'
import {getLanguage} from "../../i18n";

function sagasWithClient(client) {

    function* loadInitialData({token}) {
        try {
            const lang = getLanguage();
            const data = yield call(client.getInitialData, { lang, token });
            console.log(data);
            yield put(InitialDataActions.initialDataSuccess(data));
        } catch (e) {
            yield put(InitialDataActions.initialDataError(e));
        }
    }

    function* watchActions(): Generator<*, *, *> {
        yield takeLatest(InitialDataTypes.INITIAL_DATA_REQUEST, loadInitialData);
    }

    return {loadInitialData, watchActions};
}

export default sagasWithClient;
