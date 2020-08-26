import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import Radio from '../../components/Radio'
import { getLanguage, LANG_TYPES, setLanguage } from '../../i18n'

import styles from './styles'

const SettingsLanguage = () => {
  const { t } = useTranslation()
  const handleSetRussianLanguage = useCallback(() => setLanguage(LANG_TYPES.RU), [])
  const handleSetEnglishLanguage = useCallback(() => setLanguage(LANG_TYPES.EN), [])

  const currentLanguage = getLanguage()
  return (
    <View>
      <Text style={styles.header}>{t('settings.language')}</Text>
      <Radio
        label={t('settings.russian')}
        value={LANG_TYPES.RU}
        isChecked={currentLanguage === LANG_TYPES.RU}
        onChangeValue={handleSetRussianLanguage}
      />
      <Radio
        label={t('settings.english')}
        value={LANG_TYPES.EN}
        isChecked={currentLanguage === LANG_TYPES.EN}
        onChangeValue={handleSetEnglishLanguage}
      />
    </View>
  )
}

export default SettingsLanguage
