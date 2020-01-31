import React from 'react'
import { ActivityIndicator } from 'react-native'
import Modal from 'Components/modalView'
import styles from './style'

const defaultProps = {
  isVisible: false,
  color: 'green',
  type: 'ACTIVITY_INDICATOR_SPINNER',
}

const Spinner = (props) => {
  const {
    isVisible, color,
  } = {...defaultProps, ...props}

  return (
    <Modal
      isVisible={isVisible}
      showClose={false}
      modalStyle={styles.containerForActivityIndicator}
    >
      <ActivityIndicatorSpinner color={color}/>
    </Modal>
  )
}

const ActivityIndicatorSpinner = (props) => {
  const {color} = props

  return (
    <ActivityIndicator
      size={'large'}
      color={color}
    />
  )
}

export default Spinner
