import React from 'react'
import { Dialog, Paragraph, Text, Button, Portal } from 'react-native-paper'
import { useTranslation } from 'react-i18next'

const DeleteModal = ({ onPressOK = () => {}, onPressCancel = () => {} }) => {
  const { t } = useTranslation()
  return (
    <Portal>
      <Dialog visible>
        <Dialog.Title>{t('addEditObservation.delete')}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>
            <Text>{t('addEditObservation.confirmationDeletePhoto')}</Text>
          </Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onPressCancel}>Cancel</Button>
          <Button mode='text' onPress={onPressOK}>
            OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default DeleteModal
