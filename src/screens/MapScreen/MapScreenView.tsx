import React, { useState, useCallback } from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'

import { convertCoordinateArrayToObj } from './utils'
import styles from './styles'

const MapScreenView = ({ setCoordinateToForm, initialCoordinate }) => {
  const [coordinatePoint, setCoordinatePoint] = useState(initialCoordinate)

  const onPress = useCallback(
    ({ geometry }) => {
      if (geometry && geometry.coordinates) {
        setCoordinatePoint(geometry.coordinates)
        setCoordinateToForm(convertCoordinateArrayToObj(geometry.coordinates))
      }
    },
    [setCoordinatePoint, setCoordinateToForm]
  )

  const handleSelectPoint = useCallback(() => {
    setCoordinatePoint(null)
    setCoordinateToForm(null)
  }, [setCoordinateToForm])

  return (
    <MapboxGL.MapView style={styles.mapbox} onPress={onPress} compassEnabled>
      <MapboxGL.Camera followZoomLevel={12} followUserLocation />
      {coordinatePoint ? (
        <MapboxGL.PointAnnotation
          id='MapScreen/PointAnnotation'
          coordinate={coordinatePoint}
          onSelected={handleSelectPoint}
        />
      ) : null}
      <MapboxGL.UserLocation />
    </MapboxGL.MapView>
  )
}

export default MapScreenView
