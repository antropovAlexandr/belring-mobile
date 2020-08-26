import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'
import RegistrationView from './RegistrationView'
import { checkEmailIsValid, checkPasswordIsValid } from '../../../helper/validation'
import { registrationUserRequest } from '../reducer'

const Registration = ({ navigation }) => {
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

  return (
    <Form
      onSubmit={({ email, password, firstName, lastName, phone }) =>
        dispatch(registrationUserRequest({ email, password, firstName, lastName, phone }))
      }
      validate={validation}
      render={({ handleSubmit }) => (
        <RegistrationView onPressRegistration={handleSubmit} onPressBack={handleNavigateBack} />
      )}
    />
  )
}

export default Registration
