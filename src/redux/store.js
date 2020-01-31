import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducer from 'Redux/reducers'
import sagas from 'Redux/sagas'
import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'navigatorReducer',
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigatorReducer,
);
let middlewares = applyMiddleware(
  navigationMiddleware,
  sagaMiddleware,
)

if (process.env.NODE_ENV !== 'production') {
  middlewares = composeWithDevTools(middlewares)
}

const store = createStore(persistedReducer, middlewares)

sagaMiddleware.run(sagas)

const persistor = persistStore(store);

export default { store, persistor }
