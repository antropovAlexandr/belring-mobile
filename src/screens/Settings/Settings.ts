import React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, KeyboardAvoidingView, Text } from 'react-native'
import SettingsEmail from './SettingsEmail'
import SettingsPassword from './SettingsPassword'
import SettingsPersonalData from './SettingsPersonalData'
import SettingsLanguage from './SettingsLanguage'

import styles from './styles'

const Settings = () => {
  const { t } = useTranslation()
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>{t('settings.profileSettings')}</Text>
        <SettingsEmail />
        <SettingsPassword />
        <SettingsPersonalData />
        <SettingsLanguage />
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Settings
