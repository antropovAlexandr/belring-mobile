import React from 'react'
import { Form } from 'react-final-form'
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import FormFieldWithTextInput from '../../../components/FormFieldWithTextInput'
import { registrationUserRequest } from '../reducer'

import styles from './styles'

const RegistrationView = ({ onPressRegistration, onPressBack, validation, handleFormSubmit }) => {
  const { t } = useTranslation()
  return (
    <Form
      onSubmit={handleFormSubmit}
      validate={validation}
      render={({ handleSubmit }) => (
        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.headerText}>{t('registration.sign-up')}</Text>
          <FormFieldWithTextInput
            name='email'
            component={TextInput}
            label={t('registration.email')}
            mode='outlined'
            autoCapitalize='none'
          />
          <FormFieldWithTextInput
            name='password'
            component={TextInput}
            label={t('registration.password')}
            mode='outlined'
            secureTextEntry
          />
          <Text style={styles.hintText}>{t('registration.communicationDataHint')}</Text>
          <FormFieldWithTextInput
            name='firstName'
            component={TextInput}
            label={t('registration.firstName')}
            mode='outlined'
          />
          <FormFieldWithTextInput
            name='lastName'
            component={TextInput}
            label={t('registration.lastName')}
            mode='outlined'
          />
          <FormFieldWithTextInput name='phone' component={TextInput} label={t('registration.phone')} mode='outlined' />
          <Button mode='contained' style={styles.footerBtn} onPress={onPressRegistration}>
            {t('registration.register')}
          </Button>
          <Button mode='text' style={styles.footerBtn} onPress={onPressBack}>
            {t('registration.back')}
          </Button>
        </KeyboardAwareScrollView>
      )}
    />
  )
}

export default RegistrationView
