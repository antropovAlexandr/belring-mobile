import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-paper'
import { Form } from 'react-final-form'

import FormFieldWithTextInput from '../../components/FormFieldWithTextInput'
import { updateUserPersonalDataRequest } from '../Login/reducer'
import { userDataSelector } from '../Login/selector'

import { settingPersonalDataValidation } from './validation'
import { PERSONAL_DATA_FIELD_NAME } from './constants'
import styles from './styles'

const { FIRST_NAME, LAST_NAME, PHONE } = PERSONAL_DATA_FIELD_NAME

const SettingsPersonalData = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { firstName, lastName } = useSelector(userDataSelector)
  const onSubmit = useCallback(
    (values) => {
      dispatch(
        updateUserPersonalDataRequest({
          firsName: values[FIRST_NAME],
          lastName: values[LAST_NAME],
          phone: values[PHONE],
        })
      )
    },
    [dispatch]
  )

  return (
    <Form
      onSubmit={onSubmit}
      validate={settingPersonalDataValidation}
      initialValues={{
        [FIRST_NAME]: firstName,
        [LAST_NAME]: lastName,
      }}
      render={({ handleSubmit }) => (
        <View style={styles.section}>
          <Text style={styles.title}>{t('settings.personalInfo')}</Text>
          <FormFieldWithTextInput name={FIRST_NAME} label={t('settings.firstName')} mode='flat' dense />
          <FormFieldWithTextInput name={LAST_NAME} label={t('settings.lastName')} mode='flat' dense />
          <FormFieldWithTextInput name={PHONE} label={t('settings.phone')} mode='flat' dense />
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

export default SettingsPersonalData
