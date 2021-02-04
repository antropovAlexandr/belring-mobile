import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, memo } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'
import { images } from 'Consts'

import { checkEmailIsValid, checkPasswordIsValid } from '../../helper/validation'
import PATHS from '../constants'

import LoginView from './LoginView'
import { loginUserRequest } from './reducer'
import { EMAIL_INPUT_NAME, PASSWORD_INPUT_NAME } from './constants'

export default memo(({ navigation }: Props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onPressRegistration = useCallback(() => {
    navigation.navigate(PATHS.REGISTRATION_SCREEN)
  }, [navigation])

  const onPressResetPassword = useCallback(() => {
    navigation.navigate(PATHS.PASSWORD_RECOVERY)
  }, [navigation])

  const navigateToAboutApp = useCallback(() => {
    navigation.navigate(PATHS.ABOUT_APP_SCREEN)
  }, [navigation])

  const validation = useCallback(
    (values) => {
      const errors = {}
      if (!checkEmailIsValid(values[EMAIL_INPUT_NAME])) errors[EMAIL_INPUT_NAME] = t('validationError.email')
      if (!checkPasswordIsValid(values[PASSWORD_INPUT_NAME]))
        errors[PASSWORD_INPUT_NAME] = t('validationError.password')
      return errors
    },
    [t]
  )

  const onSubmit = useCallback(
    (values) => dispatch(loginUserRequest({ email: values[EMAIL_INPUT_NAME], password: values[PASSWORD_INPUT_NAME] })),
    [dispatch]
  )

  return (
    <Form
      onSubmit={onSubmit}
      validate={validation}
      render={({ handleSubmit }) => (
        <LoginView
          logoImg={images.logoImg}
          onPressLogin={handleSubmit}
          onPressRegistration={onPressRegistration}
          onPressResetPassword={onPressResetPassword}
          navigateToAboutApp={navigateToAboutApp}
        />
      )}
    />
  )
})

interface Props {
  navigation: StackNavigationProp<any>
}
