import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation'
import { TFunction } from 'i18next'

import { LOCATION_ITEMS, FIELD_NAME } from './constants'

const { LOCATION_NAME, LOCATION_COORDINATE } = FIELD_NAME
const { GEO_POSITION, ON_MAP } = LOCATION_ITEMS

export const getLocationItems = (
  translate: TFunction,
  onPressCurrentGeoPosition: (position: GeolocationResponse) => void,
  onPressMap: () => void
) => [
  {
    id: GEO_POSITION,
    label: translate('places.currentGeoPosition'),
    value: GEO_POSITION,
    icon: 'crosshairs-gps',
    onPress: () => Geolocation.getCurrentPosition(({ coords }) => onPressCurrentGeoPosition({ coords })),
  },
  {
    id: ON_MAP,
    label: translate('places.locationOnMap'),
    value: ON_MAP,
    icon: 'map',
    onPress: onPressMap,
  },
]

export const getPlacesForUpdate = (values, userPlaces, placeId) => {
  const newPlace = {
    customName: values[LOCATION_NAME],
    geoName: null,
    latitude: values[LOCATION_COORDINATE].latitude,
    longitude: values[LOCATION_COORDINATE].longitude,
  }
  let places = [...(userPlaces || [])]
  if (placeId !== undefined) {
    const index = places.findIndex((place) => place.id === placeId)
    places.splice(index, 1, newPlace)
  } else places = [...places, newPlace]
  return places
}
