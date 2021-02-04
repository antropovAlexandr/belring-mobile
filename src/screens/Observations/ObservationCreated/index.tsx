import React, { useCallback } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-paper'

import PATHS from '../../constants'
import { FIELD_NAME } from '../AddObservation/constants'

import styles from './styles'

const {
  TYPE_OF_BIRD,
  BIRD_SEX,
  BIRD_AGE,
  BIRD_WAS,
  BIRD_STATUS,
  LOCATION_CONDITION,
  PLACE,
  COORDINATE_ACCURACY,
} = FIELD_NAME

const ObservationCreated = ({ route, navigation }) => {
  const { values = {} } = route.params
  const { t } = useTranslation()

  const handleNavigateWithBirdInfo = useCallback(() => {
    navigation.navigate(PATHS.ADD_OBSERVATION, {
      initialValues: {
        [TYPE_OF_BIRD]: values[TYPE_OF_BIRD],
        [BIRD_SEX]: values[BIRD_SEX],
        [BIRD_AGE]: values[BIRD_AGE],
        [BIRD_WAS]: values[BIRD_WAS],
        [BIRD_STATUS]: values[BIRD_STATUS],
      },
    })
  }, [navigation, values])

  const handleNavigateWithLocationInfo = useCallback(() => {
    navigation.navigate(PATHS.ADD_OBSERVATION, {
      initialValues: {
        [LOCATION_CONDITION]: values[LOCATION_CONDITION],
        [PLACE]: values[PLACE],
        [COORDINATE_ACCURACY]: values[COORDINATE_ACCURACY],
      },
    })
  }, [navigation, values])

  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{t('observationCreated.observationCreatedTitle')}</Text>
          <Text style={styles.description}>{t('observationCreated.observationCreatedDescription')}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button mode='outlined' onPress={handleNavigateWithBirdInfo} style={styles.button}>
          {t('observationCreated.createOneMoreBird')}
        </Button>
        <Button mode='outlined' onPress={handleNavigateWithLocationInfo} style={styles.button}>
          {t('observationCreated.createOneInLocation')}
        </Button>
      </View>
    </ScrollView>
  )
}

export default ObservationCreated
