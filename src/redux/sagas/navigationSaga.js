import { put } from 'redux-saga/effects';
import { NavigationActions, StackActions } from 'react-navigation';

export function* navigate(action) {
  yield put(
    NavigationActions.navigate({
      routeName: action.payload.routeName,
      params: action.payload.params,
    }),
  );
}

export function* reset(action) {
  yield put(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: action.payload.routeName,
          params: action.payload.params,
        }),
      ],
    }),
  );
}

export function* goBack(action) {
  const { count = 1 } = action;

  yield put(
    StackActions.pop({
      n: count,
    }),
  );
}
