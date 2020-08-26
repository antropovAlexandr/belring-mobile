import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-paper'
import { Form } from 'react-final-form'

import FormFieldWithTextInput from '../../components/FormFieldWithTextInput'
import { updateUserEmailRequest } from '../Login/reducer'
import { userDataSelector } from '../Login/selector'

import { settingEmailValidation } from './validation'
import { EMAIL_FIELD_NAME } from './constants'
import styles from './styles'

const { EMAIL, PASSWORD } = EMAIL_FIELD_NAME

const SettingsEmail = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { email } = useSelector(userDataSelector)

  const onSubmit = useCallback((values) => {
    dispatch(updateUserEmailRequest({ email: values[EMAIL], password: values[PASSWORD] }))
  }, [])

  return (
    <Form
      onSubmit={onSubmit}
      validate={settingEmailValidation}
      initialValues={{
        [EMAIL]: email,
      }}
      render={({ handleSubmit }) => (
        <View style={styles.section}>
          <Text style={styles.title}>{t('settings.email')}</Text>
          <FormFieldWithTextInput name={EMAIL} label={t('settings.email')} dense mode='flat' />
          <FormFieldWithTextInput name={PASSWORD} label={t('settings.password')} mode='flat' dense secureTextEntry />
          <View style={styles.buttonContainer}>
            <Button mode='outlined' onPress={handleSubmit} style={styles.buttonStyle}>
              {t('settings.refresh')}
            </Button>
          </View>
        </View>
      )}
    />
  )
}

export default SettingsEmail
