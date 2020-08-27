import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from 'Consts'

import styles from '../../../styles'

const ImageUploader = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.uploadPhoto}>
    <Icon name='camera' size={44} color={colors.grayMedium} />
  </TouchableOpacity>
)

export default ImageUploader
