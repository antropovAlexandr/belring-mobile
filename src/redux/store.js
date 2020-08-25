import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from 'Redux/reducers'
import sagas from 'Redux/sagas'
import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer, createTransform } from 'redux-persist';

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

const store = createStore(persistedReducer, middlewares);

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export default { store, persistor }
