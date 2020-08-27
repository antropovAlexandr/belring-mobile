import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, memo } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { checkEmailIsValid } from '../../../helper/validation'
import { resetPasswordRequest } from '../reducer'

import PasswordRecoveryView from './PasswordRecoveryView'

export default memo(({ navigation }: Props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const validation = (values) => {
    const errors = {}
    if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email')
    return errors
  }

  const handleNavigateBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <Form
      onSubmit={({ email }) => dispatch(resetPasswordRequest({ email }))}
      validate={validation}
      render={({ handleSubmit }) => (
        <PasswordRecoveryView onPressResetPassword={handleSubmit} onPressBack={handleNavigateBack} />
      )}
    />
  )
})

interface Props {
  navigation: StackNavigationProp<any>
}
