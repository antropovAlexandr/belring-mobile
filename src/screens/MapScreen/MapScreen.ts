import React, { useEffect, useState, useMemo } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { useTranslation } from 'react-i18next'
import MapScreenView from './MapScreenView'
import { IS_ANDROID } from '../../helper/utils'
import { firebrick } from '../../consts/colors'
import styles from './styles'
import { convertCoordinateObjToArray } from './utils'

import env from '../../../env.json'

MapboxGL.setAccessToken(env.accessToken)

const MapScreen = ({ route }) => {
  const { params = {} } = route
  const { setCoordinateToForm = () => {}, initialCoordinate } = params
  const { t } = useTranslation()
  const [isAndroidPermissionGranted, setIsAndroidPermissionGranted] = useState(false)
  const [isFetchingAndroidPermission, setIsFetchingAndroidPermission] = useState(IS_ANDROID)
  const initialCoordinateArray = useMemo(() => convertCoordinateObjToArray(initialCoordinate), [initialCoordinate])

  useEffect(() => {
    const task = async () => {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions()
      setIsAndroidPermissionGranted(isGranted)
      setIsFetchingAndroidPermission(false)
    }
    if (IS_ANDROID) task()
  }, [])

  if (IS_ANDROID && !isAndroidPermissionGranted) {
    if (isFetchingAndroidPermission) return null
    return (
      <View style={styles.noPermissionsContainer}>
        <Icon name='alert-outline' size={64} color={firebrick} />
        <Text style={styles.noPermissionsText}>{t('places.locationPermissions')}</Text>
      </View>
    )
  }
  return <MapScreenView setCoordinateToForm={setCoordinateToForm} initialCoordinate={initialCoordinateArray} />
}

export default MapScreen
