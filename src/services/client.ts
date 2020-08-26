import Axios from 'axios'
import { BASE_URL } from './constants'
import { store } from '../store'
import { refreshToken } from './api'
import httpErrorAdapter from './httpErrorAdapter'
import { updateTokenRequest } from '../screens/Login/reducer'
import { userRefreshTokenSelector, userTokenSelector } from '../screens/Login/selector'

const client = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  timeout: 5000,
})

client.interceptors.request.use(
  (config) => {
    const state = store.getState()
    const token = userTokenSelector(state)
    if (token) config.headers['Authorization'] = token
    return config
  },
  (error) => Promise.reject(error)
)

let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter((callback) => callback(access_token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

client.interceptors.response.use(null, (error) => {
  if (error.config && !error?.response?.data?.error && error?.response?.status === 401) {
    const originalRequest = error.config
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true
      const state = store.getState()
      const token = userRefreshTokenSelector(state)
      refreshToken({ refreshToken: token }).then(({ token, refreshToken }) => {
        store.dispatch(updateTokenRequest(token, refreshToken))
        isAlreadyFetchingAccessToken = false
        onAccessTokenFetched(token)
      })
    }
    return new Promise((resolve) => {
      addSubscriber((token) => {
        originalRequest.headers['Authorization'] = token
        resolve(client(originalRequest))
      })
    })
  }
  throw httpErrorAdapter(error)
})

export default client
