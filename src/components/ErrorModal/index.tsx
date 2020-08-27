import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Dialog, Paragraph, Text, Button, Portal } from 'react-native-paper'
import { useSelector } from 'react-redux'

import { appErrorSelector } from '../../store/selector'

import styles from './styles'

let currentErrorId: number | null = null

const ErrorModal = () => {
  const error = useSelector(appErrorSelector)
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  const errorMessage = useMemo(() => {
    if (!error || !error.message) {
      return null
    }
    return t(`backendError.${error.code}`) !== `backendError.${error.code}`
      ? t(`backendError.${error.code}`)
      : error.message
  }, [error])

  useEffect(() => {
    setVisible(error?.id !== currentErrorId)
  }, [error])

  const onPressOk = useCallback(() => {
    currentErrorId = error?.id
    setVisible(false)
  }, [])

  if (!error || !error.message) return null

  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        <Dialog.Title>{`${t('backendError.errorTitle')}: ${error.code}`}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>
            <Text style={styles.message}>{errorMessage}</Text>
          </Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode='text' onPress={onPressOk}>
            {t('button.OK')}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default ErrorModal
