import { put } from 'redux-saga/effects';
import { NavigationActions } from 'Redux/reducers/navigatorReducer'
import { APP_STACK, LOGIN_STACK } from 'Consts/screenNames'

export function* logout() {
  yield put(
    NavigationActions.navigate({
      routeName: LOGIN_STACK,
    }),
  )
}

export function* login() {
  yield put(
    NavigationActions.navigate({
      routeName: APP_STACK,
    }),
  )
}
