import React from 'react'
import { useSelector } from 'react-redux'
import { ActivityIndicator, Portal, Modal } from 'react-native-paper'

import { appLoadingSelector } from '../../store/selector'

const Spinner = () => {
  const isLoading = useSelector(appLoadingSelector)

  if (!isLoading) return null
  return (
    <Portal>
      <Modal visible dismissable={false}>
        <ActivityIndicator animating size='large' />
      </Modal>
    </Portal>
  )
}

export default Spinner
