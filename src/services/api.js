import apisauce from 'apisauce'
import {
    BASE_URL,
    AUTH_LOGIN_ENDPOINT,
    AUTH_REGISTRATION_ENDPOINT,
    AUTH_RESET_PASSWORD_ENDPOINT,
    GET_PLACES_ENDPOINT, INITIAL_DATA_ENDPOINT, OBSERVATIONS_ENDPOINT
} from "./constants";
import httpErrorAdapter, { checkErrorInResponse } from "./httpErrorAdapter";

const client = apisauce.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    timeout: 5000,
});

export const logIn = ({ email, password }) => {
    return client
        .post(AUTH_LOGIN_ENDPOINT, { email, password })
        .then(checkErrorInResponse)
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};

export const registration = ({ email, password, firstName, lastName, phone }) => {
    return client
        .post(AUTH_REGISTRATION_ENDPOINT, {
            rememberPassword: true,
            email,
            password,
            firstName,
            lastName,
            phone,
        })
        .then(checkErrorInResponse)
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};

export const resetPassword = ({ email }) => {
    return client
        .post(AUTH_RESET_PASSWORD_ENDPOINT, {
            email,
        })
        .then(checkErrorInResponse)
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};

export const getPlaces = () => {
    return client
        .get(GET_PLACES_ENDPOINT)
        .then(checkErrorInResponse)
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};

export const getInitialData = ({ lang, token }) => {
    return client
        .get(INITIAL_DATA_ENDPOINT, token, {  params: { lang }, headers: { Authorization: token } })
        .then(checkErrorInResponse)
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};

export const createObservation = ({ token, data }) => {
    return client
        .post(OBSERVATIONS_ENDPOINT, token, data )
        .then(checkErrorInResponse)
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};
