import React from 'react'
import { Image, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from './styles'
import Fab from '../Fab'
import { images } from 'Consts/images'

const EmptyItemsScreen = ({ title, description, navigation }) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{t(title)}</Text>
        <Text style={styles.description}>{t(description)}</Text>
      </View>
      <View style={styles.footer}>
        <Image style={styles.image} source={images.arrow} />
      </View>
      <Fab navigation={navigation} />
    </View>
  )
}

export default EmptyItemsScreen