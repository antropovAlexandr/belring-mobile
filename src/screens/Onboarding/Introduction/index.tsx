import React, { useState, useRef, useCallback } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { setIsFirstUserEntry } from '../../Login/reducer'

import Slides from './Slides'
import { styles, hitSlop } from './styles'

const MAX_COUNT_SLIDER_ITEMS = 4

const Introduction = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderRef = useRef(null)

  const goNextSlide = useCallback(() => {
    if (sliderRef && sliderRef.current) sliderRef.current.scrollBy(1)
  }, [sliderRef])

  const navigateToLoginScreen = useCallback(() => {
    dispatch(setIsFirstUserEntry())
  }, [dispatch])

  const onPressClose = useCallback(() => {
    navigateToLoginScreen()
  }, [])

  const onPressNext = useCallback(() => {
    if (sliderIndex >= MAX_COUNT_SLIDER_ITEMS - 1) {
      navigateToLoginScreen()
    } else goNextSlide()
  }, [sliderIndex])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtnContainer} hitSlop={hitSlop} onPress={onPressClose}>
        <Icon name='md-close' style={styles.closeIcon} />
      </TouchableOpacity>
      <Slides sliderRef={sliderRef} onSliderChanged={setSliderIndex} />
      <View style={styles.footer}>
        <Button onPress={onPressNext} mode='contained' style={styles.nextButton}>
          {t('introduction.next')}
        </Button>
      </View>
    </View>
  )
}

export default Introduction
