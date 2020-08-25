import React, { useEffect } from 'react'
import Swiper from 'react-native-swiper'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/Ionicons'
import { Image, TouchableOpacity, View } from 'react-native'
import { FIELD_NAME } from '../../../constants'
import { styles, hitSlop } from './styles'

const { PHOTO } = FIELD_NAME

const PreviewPhoto = ({ images, onPressClose, setShowFooter }) => {
  const { t } = useTranslation()
  useEffect(() => {
    setShowFooter(false)
    return () => setShowFooter(true)
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtnContainer} hitSlop={hitSlop} onPress={onPressClose}>
        <Icon name='md-close' style={styles.closeIcon} />
      </TouchableOpacity>
      <Swiper
        showsButtons={false}
        loop={false}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={[styles.dot, styles.backgroundActive]}
      >
        {images.map((image) => {
          if (!image) return null
          return (
            <View style={styles.slideImgContainer}>
              <Image resizeMode='cover' style={styles.slideImg} source={image[PHOTO]} />
            </View>
          )
        })}
      </Swiper>
    </View>
  )
}

export default PreviewPhoto
