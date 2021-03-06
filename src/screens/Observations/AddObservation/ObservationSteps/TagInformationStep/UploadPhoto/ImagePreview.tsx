import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from 'Consts'

import styles from '../../../styles'

const ImagePreview = ({ source, onPress, onPressDelete }) => (
  <TouchableOpacity onPress={onPress} style={styles.uploadPhoto}>
    <TouchableOpacity onPress={onPressDelete} style={styles.closeBtn}>
      <Icon name='close-circle' size={20} color={colors.grayMedium} />
    </TouchableOpacity>
    <Image style={styles.photo} source={source} />
  </TouchableOpacity>
)

export default ImagePreview
