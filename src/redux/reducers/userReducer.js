import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    token: null,
    refreshToken: null,
    isFirstEntry: true,
    loading: false,
    error: null,
};

const {Types, Creators} = createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['token', 'refreshToken'],
    registrationRequest: ['email', 'password', 'firstName', 'lastName', 'phone'],
    registrationSuccess: ['token', 'refreshToken'],
    resetPasswordRequest: ['email'],
    resetPasswordSuccess: [],
    setUserError: ['error'],
    clearUserError: [],
    logout: [],
    setIsFirstEntry: [],
});

const loginRequest = (state) => ({...state, loading: true});
const loginSuccess = (state, { token, refreshToken }) => ({ ...state, loading: false, token, refreshToken });
const registrationRequest = (state) => ({...state, loading: true});
const registrationSuccess = (state, { token, refreshToken }) => ({ ...state, loading: false, token, refreshToken });
const resetPasswordRequest = (state) => ({...state, loading: true});
const resetPasswordSuccess = (state) => ({...state, loading: false});
const setUserError = (state, { error }) => ({...state, loading: false, error});
const clearUserError = (state) => ({...state, error: null});
const setIsFirstEntry = (state) => ({...state, isFirstEntry: false});

export const LOGOUT = () => initialState;

export const reducer = createReducer(initialState, {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.REGISTRATION_REQUEST]: registrationRequest,
    [Types.REGISTRATION_SUCCESS]: registrationSuccess,
    [Types.RESET_PASSWORD_REQUEST]: resetPasswordRequest,
    [Types.RESET_PASSWORD_SUCCESS]: resetPasswordSuccess,
    [Types.SET_USER_ERROR]: setUserError,
    [Types.CLEAR_USER_ERROR]: clearUserError,
    [Types.SET_IS_FIRST_ENTRY]: setIsFirstEntry,
    LOGOUT,
});

export {Types as UserTypes, Creators as UserActions}
