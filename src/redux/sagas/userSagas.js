import {put, call, takeLatest} from 'redux-saga/effects';
import {NavigationActions} from '../reducers/navigatorReducer'
import {UserActions, UserTypes} from '../reducers/userReducer'
import {APP_STACK, LOGIN_STACK, REGISTRATION_NOTIFICATION_SCREEN} from '../../screens/constants'

function sagasWithClient(client) {
    function* logout() {
        yield put(NavigationActions.navigate({ routeName: LOGIN_STACK }))
    }

    function* login({email, password}) {
        try {
            const { token, refreshToken } = yield call(client.logIn, {email, password});
            yield put(UserActions.registrationSuccess(token, refreshToken));
            yield put(NavigationActions.navigate({ routeName: APP_STACK }));
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
            yield put(NavigationActions.navigate({
                routeName: REGISTRATION_NOTIFICATION_SCREEN, params: {origin: 'registration'}
            }));
        } catch (e) {
            yield put(UserActions.setUserError(e));
        }
    }

    function* resetPassword({ email }) {
        try {
            yield call(client.resetPassword, { email });
            yield put(UserActions.resetPasswordSuccess());
            yield put(NavigationActions.navigate({
                routeName: REGISTRATION_NOTIFICATION_SCREEN, params: {origin: 'passwordRecovery'}
            }));
        } catch (e) {
            yield put(UserActions.setUserError(e));
        }
    }

    function* watchActions(): Generator<*, *, *> {
        yield takeLatest(UserTypes.LOGIN_REQUEST, login);
        yield takeLatest(UserTypes.REGISTRATION_REQUEST, registration);
        yield takeLatest(UserTypes.RESET_PASSWORD_REQUEST, resetPassword);
        yield takeLatest(UserTypes.LOGOUT, logout);
    }

    return {login, logout, watchActions};
}

export default sagasWithClient;
