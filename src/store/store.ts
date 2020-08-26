import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import storage from '@react-native-community/async-storage'
import { persistStore, persistReducer, createTransform } from 'redux-persist'

import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const SetTransform = createTransform((inboundState, keyState) => {
  if (inboundState.error) return { ...inboundState, error: null }
  return { ...inboundState }
})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
}

const persistedReducer = persistReducer(persistConfig, reducer)

let middlewares = applyMiddleware(sagaMiddleware)

if (process.env.NODE_ENV !== 'production') {
  const DEVTOOLS_COMPOSER = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'

  const composeWithDevTools =
    typeof window === 'object' && typeof window[DEVTOOLS_COMPOSER] === 'function'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  middlewares = composeWithDevTools(middlewares)
}

export const store = createStore(persistedReducer, middlewares)

sagaMiddleware.run(sagas)

export const persistor = persistStore(store)
