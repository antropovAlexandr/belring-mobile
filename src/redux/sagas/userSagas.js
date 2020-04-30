import {call, put, takeLatest} from 'redux-saga/effects';
import {UserActions, UserTypes} from '../reducers/userReducer'
import { navigate } from '../../navigator';
import { REGISTRATION_NOTIFICATION_SCREEN } from '../../screens/constants'

function sagasWithClient(client) {

    function* login({email, password}) {
        try {
            const { token, refreshToken } = yield call(client.logIn, {email, password});
            yield put(UserActions.registrationSuccess(token, refreshToken));
        } catch (e) {
            yield put(UserActions.setUserError(e));
        }
    }

    function* registration({email, password, firstName, lastName, phone}) {
        try {
            const { token, refreshToken } = yield call(client.registration, {
                email, password, firstName, lastName, phone
            });
            yield put(UserActions.registrationSuccess(token, refreshToken));
            yield call(navigate, REGISTRATION_NOTIFICATION_SCREEN, {origin: 'registration'});
        } catch (e) {
            yield put(UserActions.setUserError(e));
        }
    }

    function* resetPassword({ email }) {
        try {
            yield call(client.resetPassword, { email });
            yield put(UserActions.resetPasswordSuccess());
            yield call(navigate,  REGISTRATION_NOTIFICATION_SCREEN, {origin: 'passwordRecovery'});
        } catch (e) {
            yield put(UserActions.setUserError(e));
        }
    }

    function* watchActions(): Generator<*, *, *> {
        yield takeLatest(UserTypes.LOGIN_REQUEST, login);
        yield takeLatest(UserTypes.REGISTRATION_REQUEST, registration);
        yield takeLatest(UserTypes.RESET_PASSWORD_REQUEST, resetPassword);
    }

    return {login, watchActions};
}

export default sagasWithClient;
