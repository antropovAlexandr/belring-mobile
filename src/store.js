import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const setTransform = createTransform(
    (inboundState, keyState) => {
      if (inboundState.error) return { ...inboundState, error: null};
      return { ...inboundState };
    },
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [setTransform]
};

const persistedReducer = persistReducer(persistConfig, reducer);

let middlewares = applyMiddleware(
  sagaMiddleware,
);

if (process.env.NODE_ENV !== 'production') {
  middlewares = composeWithDevTools(middlewares)
}

export const store = createStore(persistedReducer, middlewares);

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
