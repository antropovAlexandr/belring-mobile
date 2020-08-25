import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export default ({ onPressPrevious, onPressNext, isLastPage, isFirstPage }) => {
  const { t } = useTranslation()
  const btnTitle = useMemo(() => (isLastPage ? t('addEditObservation.publish') : t('addEditObservation.next')), [
    isLastPage,
  ])
  return (
    <View style={styles.container}>
      <View>
        {!isFirstPage && (
          <Button mode='text' onPress={onPressPrevious} style={styles.btnContainer} labelStyle={styles.btnLabel}>
            <Icon name='chevron-left' size={20} />
            <Text>{t('addEditObservation.back')}</Text>
          </Button>
        )}
      </View>
      <Button mode='text' onPress={onPressNext} style={styles.btnContainer} labelStyle={styles.btnLabel}>
        <Text>{btnTitle}</Text>
        <Icon name='chevron-right' size={20} />
      </Button>
    </View>
  )
}
