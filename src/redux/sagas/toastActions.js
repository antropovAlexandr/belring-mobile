import Toast from 'react-native-root-toast'

import { call } from 'redux-saga/effects'
import { colors } from 'Consts/themes'

const defaultOptions = {
  duration: Toast.durations.LONG,
  position: 100,
  animation: true,
  hideOnPress: true,
  delay: 0,
  visible: true,
  backgroundColor: colors.primary,
  shadow: false,
  opacity: 1,
}

const infoOptions = {
  backgroundColor: colors.success,
}

const errorOptions = {
  backgroundColor: colors.persianRed,
}

export function* showToast(action) {
  const { error, isError } = action.payload
  const options = (isError) ? errorOptions : infoOptions
  yield call(Toast.show, error, {
    ...defaultOptions,
    ...options,
  })
}
