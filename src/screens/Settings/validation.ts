import { checkEmailIsValid, checkPasswordIsValid } from '../../helper/validation'

import { EMAIL_FIELD_NAME, PASSWORD_FIELD_NAME, PERSONAL_DATA_FIELD_NAME } from './constants'

const { EMAIL, PASSWORD } = EMAIL_FIELD_NAME
const { OLD_PASSWORD, NEW_PASSWORD } = PASSWORD_FIELD_NAME
const { FIRST_NAME, LAST_NAME, PHONE } = PERSONAL_DATA_FIELD_NAME

export const settingEmailValidation = (values) => {
  const errors = {}
  if (!checkEmailIsValid(values[EMAIL])) errors[EMAIL] = 'validationError.email'
  if (!checkPasswordIsValid(values[PASSWORD])) errors[PASSWORD] = 'validationError.password'
  return errors
}

export const settingPasswordValidation = (values) => {
  const errors = {}
  if (!checkPasswordIsValid(values[OLD_PASSWORD])) errors[OLD_PASSWORD] = 'validationError.password'
  if (!checkPasswordIsValid(values[NEW_PASSWORD])) errors[NEW_PASSWORD] = 'validationError.password'
  return errors
}

export const settingPersonalDataValidation = (values) => {
  const errors = {}
  if (!values[FIRST_NAME]) errors[FIRST_NAME] = 'validationError.firstName'
  if (!values[LAST_NAME]) errors[LAST_NAME] = 'validationError.lastName'
  if (!values[PHONE]) errors[PHONE] = 'validationError.phone'
  return errors
}
