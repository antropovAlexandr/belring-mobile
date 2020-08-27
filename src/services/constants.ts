// export const BASE_URL = 'http://ptushki.westeurope.cloudapp.azure.com/api';
export const BASE_URL = 'http://localhost:3001'

export const AUTH_LOGIN_ENDPOINT = '/auth/login'
export const AUTH_LOGOUT_ENDPOINT = '/auth/logout'
export const AUTH_REFRESH_ENDPOINT = '/auth/refresh'
export const AUTH_REGISTRATION_ENDPOINT = '/auth/signup'
export const AUTH_RESET_PASSWORD_ENDPOINT = '/auth/change-password'
export const OBSERVATIONS_ENDPOINT = '/observations'
export const INITIAL_DATA_ENDPOINT = '/initial-data'
export const UPDATE_EMAIL = '/update-email'
export const UPDATE_PASSWORD = '/update-password'
export const UPDATE_PERSONAL_DATA = '/update-personal-data'
export const UPDATE_PLACES = '/update-places'
export const DELETE_OBSERVATIONS_ENDPOINT = (id) => `/observations/${id}`
export const USER = '/users'