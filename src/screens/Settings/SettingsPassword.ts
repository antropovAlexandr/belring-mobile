import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-paper'
import { Form } from 'react-final-form'
import FormFieldWithTextInput from '../../components/FormFieldWithTextInput'
import { settingPasswordValidation } from './validation'
import { updateUserPasswordRequest } from '../Login/reducer'
import { PASSWORD_FIELD_NAME } from './constants'
import styles from './styles'

const { OLD_PASSWORD, NEW_PASSWORD } = PASSWORD_FIELD_NAME

const SettingsPassword = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const onSubmit = useCallback((values) => {
    dispatch(updateUserPasswordRequest({ password: values[OLD_PASSWORD], newPassword: values[NEW_PASSWORD] }))
  }, [])

  return (
    <Form
      onSubmit={onSubmit}
      validate={settingPasswordValidation}
      render={({ handleSubmit }) => (
        <View style={styles.section}>
          <Text style={styles.title}>{t('settings.password')}</Text>
          <FormFieldWithTextInput
            name={OLD_PASSWORD}
            label={t('settings.password')}
            mode='flat'
            dense
            secureTextEntry
          />
          <FormFieldWithTextInput
            name={NEW_PASSWORD}
            label={t('settings.newPassword')}
            mode='flat'
            dense
            secureTextEntry
          />
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

export default SettingsPassword
