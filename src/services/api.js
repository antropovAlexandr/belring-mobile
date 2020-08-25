import client from './client'

import {
  AUTH_LOGIN_ENDPOINT,
  AUTH_REGISTRATION_ENDPOINT,
  AUTH_RESET_PASSWORD_ENDPOINT,
  INITIAL_DATA_ENDPOINT,
  OBSERVATIONS_ENDPOINT,
  USER,
  UPDATE_PLACES,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  AUTH_REFRESH_ENDPOINT,
} from './constants'
import { getUserResponseAdapter } from './responseAdapters'

export const refreshToken = ({ refreshToken }) => {
  return client.post(AUTH_REFRESH_ENDPOINT, { refreshToken }).then((response) => response.data)
}

export const logIn = ({ email, password }) => {
  return client.post(AUTH_LOGIN_ENDPOINT, { email, password }).then((response) => response.data)
}

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
    .then((response) => response.data)
}

export const resetPassword = ({ email }) => {
  return client.post(AUTH_RESET_PASSWORD_ENDPOINT, { email }).then((response) => response.data)
}

export const getInitialData = ({ lang }) => {
  return client.get(INITIAL_DATA_ENDPOINT, { params: { lang } }).then((response) => response.data)
}

export const getUser = ({ userId }) => {
  return client.get(`${USER}/${userId}`).then((response) => getUserResponseAdapter(response.data))
}

export const setPlaces = ({ userId, places }) => {
  return client.put(`${USER}/${userId}${UPDATE_PLACES}`, places).then((response) => response.data)
}

export const updateEmail = ({ userId, email, password }) => {
  return client.put(`${USER}/${userId}${UPDATE_EMAIL}`, { email, password }).then((response) => response.data)
}

export const updatePassword = ({ userId, password, newPassword }) => {
  return client.put(`${USER}/${userId}${UPDATE_PASSWORD}`, { password, newPassword }).then((response) => response.data)
}

export const updateUser = ({ userId, firsName, lastName, phone }) => {
  return client.put(`${USER}/${userId}`, { firsName, lastName, phone }).then((response) => response.data)
}

// Observations
export const getObservations = () => {
  return client.get(OBSERVATIONS_ENDPOINT).then((response) => response.data)
}

export const createObservation = ({ observation }) => {
  return client.post(OBSERVATIONS_ENDPOINT, observation).then((response) => response.data)
}
