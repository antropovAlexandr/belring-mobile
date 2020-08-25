import {put, call, takeLatest, select} from 'redux-saga/effects';
import {InitialDataActions, InitialDataTypes} from '../reducers/initialDataReducer'
import {getLanguage} from "../../i18n";
import {userTokenSelector} from "../../selectors/userSelector";

function sagasWithClient(client) {

    function* loadInitialData() {
        try {
            const lang = getLanguage();
            const token = yield select(userTokenSelector);
            const data = yield call(client.getInitialData, { lang, token });
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
