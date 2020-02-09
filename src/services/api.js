import apisauce from 'apisauce'
import {BASE_URL, AUTH_LOGIN_ENDPOINT, AUTH_REGISTRATION_ENDPOINT, AUTH_RESET_PASSWORD_ENDPOINT} from "./constants";
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
        .then((response) => checkErrorInResponse(response))
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
        .then((response) => checkErrorInResponse(response))
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};

export const resetPassword = ({ email }) => {
    return client
        .post(AUTH_RESET_PASSWORD_ENDPOINT, {
            email,
        })
        .then((response) => checkErrorInResponse(response))
        .catch(error => {
            throw httpErrorAdapter(error);
        })
};
