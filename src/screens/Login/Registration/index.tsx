import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, memo } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { checkEmailIsValid, checkPasswordIsValid } from '../../../helper/validation'
import { registrationUserRequest } from '../reducer'

import RegistrationView from './RegistrationView'

export default memo(({ navigation }: Props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const validation = (values) => {
    const errors = {}
    if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email')
    if (!checkPasswordIsValid(values.password)) errors.password = t('validationError.password')
    if (!values.firstName) errors.firstName = t('validationError.firstName')
    if (!values.lastName) errors.lastName = t('validationError.lastName')
    if (!values.phone) errors.phone = t('validationError.phone')
    return errors
  }

  const handleNavigateBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const handleFormSubmit = ({ email, password, firstName, lastName, phone }) =>
    dispatch(registrationUserRequest({ email, password, firstName, lastName, phone }))

  return <RegistrationView handleFormSubmit={handleFormSubmit} onPressBack={handleNavigateBack} />
})

interface Props {
  navigation: StackNavigationProp<any>
}
