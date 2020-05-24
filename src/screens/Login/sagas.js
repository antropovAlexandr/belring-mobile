import {put, call, takeLatest, select, takeLeading} from 'redux-saga/effects';
import {
    loginUserRequest,
    loginUserSuccess,
    registrationUserRequest,
    registrationUserSuccess,
    resetPasswordRequest,
    resetPasswordSuccess,
    updateUserEmailRequest,
    updateUserEmailSuccess,
    updateUserPasswordRequest,
    updateUserPasswordSuccess,
    updateUserPersonalDataRequest,
    updateUserPersonalDataSuccess,
    userFailure,
} from './reducer'
import {navigate} from "../../navigator";
import {REGISTRATION_NOTIFICATION_SCREEN} from "../constants";
import {userRefreshTokenSelector, userIdSelector} from "./selector";

function sagasWithClient(client) {

    function* updateEmail({ payload }) {
        const { email, password } = payload;
        try {
            const id = yield select(userIdSelector);
            yield call(client.updateEmail, { userId: id, email, password });
            yield put(updateUserEmailSuccess());
        } catch (e) {
            yield put(userFailure(e));
        }
    }

    function* updatePassword({ payload }) {
        const { password, newPassword } = payload;
        try {
            const id = yield select(userIdSelector);
            yield call(client.updatePassword, { userId: id, password, newPassword });
            yield put(updateUserPasswordSuccess());
        } catch (e) {
            yield put(userFailure(e));
        }
    }

    function* updatePersonalDate({ payload }) {
        const { firsName, lastName, phone } = payload;
        try {
            const id = yield select(userIdSelector);
            yield call(client.updateUser, { userId: id, firsName, lastName, phone });
            yield put(updateUserPersonalDataSuccess());
        } catch (e) {
            yield put(userFailure(e));
        }
    }

    function* login({ payload }) {
        const {email, password} = payload;
        try {
            const { token, refreshToken, user } = yield call(client.logIn, {email, password});
            const { id, role, firstName, lastName } = user;
            yield put(loginUserSuccess({ token, refreshToken, id, role, email: user.email, firstName, lastName }));
        } catch (e) {
            yield put(userFailure(e));
        }
    }

    function* registration({ payload }) {
        const {email, password, firstName, lastName, phone} = payload;
        try {
            const { token, refreshToken } = yield call(client.registration, {
                email, password, firstName, lastName, phone
            });
            yield put(registrationUserSuccess(token, refreshToken));
            yield call(navigate, REGISTRATION_NOTIFICATION_SCREEN, {origin: 'registration'});
        } catch (e) {
            yield put(userFailure(e));
        }
    }

    function* resetPassword({ payload }) {
        const { email } = payload;
        try {
            yield call(client.resetPassword, { email });
            yield put(resetPasswordSuccess());
            yield call(navigate,  REGISTRATION_NOTIFICATION_SCREEN, {origin: 'passwordRecovery'});
        } catch (e) {
            yield put(userFailure(e));
        }
    }

    function* refreshToken({ refreshToken }) {
        try {
            const refreshToken = yield select(userRefreshTokenSelector);
            const data = yield call(client.refreshToken, { refreshToken });
            // console.log('data', data);
            // yield put(AuthActions.resetPasswordSuccess());
            // yield call(navigate,  REGISTRATION_NOTIFICATION_SCREEN, {origin: 'passwordRecovery'});
        } catch (e) {
            yield put(userFailure(e));
        }
    }

    function* watchActions(): Generator<*, *, *> {
        yield takeLatest(loginUserRequest, login);
        yield takeLatest(registrationUserRequest, registration);
        yield takeLatest(resetPasswordRequest, resetPassword);
        // yield takeLatest(UserTypes.LOAD_USER_REQUEST, loadUser);
        yield takeLatest(updateUserEmailRequest, updateEmail);
        yield takeLatest(updateUserPasswordRequest, updatePassword);
        yield takeLeading(updateUserPersonalDataRequest, updatePersonalDate);
    }

    return {watchActions};
}

export default sagasWithClient;
