import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { List } from 'react-native-paper'
import { useTranslation } from 'react-i18next'

import { formatCoordinateToString } from '../../helper/formatter'
import Fab from '../../components/Fab'
import PATHS from '../constants'

import styles from './styles'

const PlacesList = ({ places, navigation }) => {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{t('places.myPlaces')}</Text>
        </View>
        <View>
          {places.map(({ customName, latitude, longitude, id }) => (
            <List.Item
              key={id}
              title={customName}
              description={formatCoordinateToString({ latitude, longitude })}
              right={(props) => <List.Icon {...props} icon='chevron-right' />}
              onPress={() =>
                navigation.navigate(PATHS.ADD_PLACE, { locationName: customName, latitude, longitude, placeId: id })
              }
            />
          ))}
        </View>
      </ScrollView>
      <Fab navigation={navigation} />
    </View>
  )
}

export default PlacesList
