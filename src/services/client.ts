import Axios from 'axios'

import { store } from '../store'
import { updateTokenRequest } from '../screens/Login/reducer'
import { userRefreshTokenSelector, userTokenSelector } from '../screens/Login/selector'

import { BASE_URL } from './constants'
import { postRefreshToken } from './api'
import httpErrorAdapter from './httpErrorAdapter'

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
    if (token) config.headers.Authorization = token
    return config
  },
  (error) => Promise.reject(error)
)

let isAlreadyFetchingAccessToken = false
let subscribers: Array<Function> = []

function onAccessTokenFetched(access_token: string) {
  subscribers = subscribers.filter((callback) => callback(access_token))
}

function addSubscriber(callback: (token: string) => void): void {
  subscribers.push(callback)
}

client.interceptors.response.use(undefined, (error) => {
  if (error.config && !error?.response?.data?.error && error?.response?.status === 401) {
    const originalRequest = error.config
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true
      const state = store.getState()
      const userRefreshToken = userRefreshTokenSelector(state)
      postRefreshToken({ refreshToken: userRefreshToken }).then(({ token, refreshToken }) => {
        store.dispatch(updateTokenRequest(token, refreshToken))
        isAlreadyFetchingAccessToken = false
        onAccessTokenFetched(token)
      })
    }
    return new Promise((resolve) => {
      addSubscriber((token: string) => {
        originalRequest.headers.Authorization = token
        resolve(client(originalRequest))
      })
    })
  }
  throw httpErrorAdapter(error)
})

export default client
