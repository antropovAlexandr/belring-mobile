import { combineActions, createAction, handleActions } from 'redux-actions';

export const loginUserRequest = createAction('LOGIN_USER_REQUEST');
export const loginUserSuccess = createAction('LOGIN_USER_SUCCESS');
export const registrationUserRequest = createAction('REGISTRATION_USER_REQUEST');
export const registrationUserSuccess = createAction('REGISTRATION_USER_SUCCESS');
export const resetPasswordRequest = createAction('RESET_USER_PASSWORD_REQUEST');
export const resetPasswordSuccess = createAction('RESET_USER_PASSWORD_SUCCESS');
export const setIsFirstUserEntry = createAction('SET_IS_FIRST_USER_ENTRY');
export const logoutUserRequest = createAction('LOGOUT_USER_REQUEST');
export const updateTokenRequest = createAction('UPDATE_USER_REQUEST');
export const updateUserEmailRequest = createAction('UPDATE_USER_EMAIL_REQUEST');
export const updateUserEmailSuccess = createAction('UPDATE_USER_EMAIL_SUCCESS');
export const updateUserPasswordRequest = createAction('UPDATE_USER_PASSWORD_REQUEST');
export const updateUserPasswordSuccess = createAction('UPDATE_USER_PASSWORD_SUCCESS');
export const updateUserPersonalDataRequest = createAction('UPDATE_USER_PERSONAL_DATA_REQUEST');
export const updateUserPersonalDataSuccess = createAction('UPDATE_USER_PERSONAL_DATA_SUCCESS');
export const userFailure = createAction('USER_FAILURE');


export const initialState = {
    token: null,
    refreshToken: null,
    isFirstEntry: true,
    id: null,
    role: null,
    email: null,
    firstName: null,
    lastName: null,
    loading: false,
    error: null,
};

export default handleActions(
    {
        [combineActions(
            loginUserRequest,
            registrationUserRequest,
            resetPasswordRequest,
            updateUserEmailRequest,
            updateUserPasswordRequest,
            updateUserPersonalDataRequest
        )]: state => ({
            ...state, loading: true, error: null
        }),
        [loginUserSuccess]: (state, { payload }) => ({
            ...state,
            loading: false,
            token: payload.token,
            refreshToken: payload.refreshToken,
            id: payload.id,
            role: payload.role,
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
        }),
        [registrationUserSuccess]: (state, { payload }) => ({
            ...state,
            loading: false,
            token: payload.token,
            refreshToken: payload.refreshToken,
        }),
        [combineActions(
            resetPasswordSuccess,
            updateUserEmailSuccess,
            updateUserPasswordSuccess,
            updateUserPersonalDataSuccess
        )]: state => ({ ...state, loading: false }),
        [setIsFirstUserEntry]: state => ({ ...state, isFirstEntry: false }),
        [logoutUserRequest]: () => ({ ...initialState, isFirstEntry: false }),
        [updateTokenRequest]: (state, { payload }) => ({
            ...state,
            token: payload.token,
            refreshToken: payload.refreshToken,
        }),
        [userFailure]: (state, action) => ({...state, loading: false,  error: action.payload }),
    },
    initialState,
);
