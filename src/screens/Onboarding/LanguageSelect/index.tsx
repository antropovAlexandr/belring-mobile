import React, { useCallback, memo } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { StackNavigationProp } from '@react-navigation/stack'

import { LANG_TYPES, setLanguage } from '../../../i18n'
import PATHS from '../../constants'

import { styles } from './styles'

export default memo(({ navigation }: Props) => {
  const { t } = useTranslation()

  const onChangeLanguage = useCallback(
    (language) => {
      navigation.navigate(PATHS.INTRODUCTION_SCREEN)
      setLanguage(language)
    },
    [navigation]
  )

  return (
    <View style={styles.buttonsContainer}>
      <Button mode='outlined' style={styles.buttonStyle} onPress={() => onChangeLanguage(LANG_TYPES.RU)}>
        {t('languageSelect.russian')}
      </Button>
      <Button mode='outlined' style={styles.buttonStyle} onPress={() => onChangeLanguage(LANG_TYPES.EN)}>
        {t('languageSelect.english')}
      </Button>
    </View>
  )
})

interface Props {
  navigation: StackNavigationProp<any>
}
