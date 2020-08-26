import { FIELD_NAME } from './constants'

const {
  PHOTOS,
  RINGS,
  TAG_NUMBER,
  TAG_TYPE,
  TYPE_OF_BIRD,
  BIRD_SEX,
  BIRD_AGE,
  BIRD_WAS,
  BIRD_STATUS,
  LOCATION_CONDITION,
  PLACE,
  COORDINATE_ACCURACY,
  DATE,
  DATE_ACCURACY,
} = FIELD_NAME

const getObservationPhotosAdapter = (photos) => {
  console.log('photos', photos)
  if (!photos || photos.length) return null
  return photos.map((photo) => {
    if (photo && photo.uri) return photo.uri
  })
}

export const createObservationAdapter = (values) => ({
  ring: values[RINGS][0][TAG_NUMBER],
  ringMentioned: values[RINGS][0][TAG_TYPE],
  speciesMentioned: values[TYPE_OF_BIRD],
  sexMentioned: values[BIRD_SEX],
  ageMentioned: values[BIRD_AGE],
  latitude: values[PLACE].latitude,
  longitude: values[PLACE].longitude,
  photos: getObservationPhotosAdapter(values[PHOTOS]),
  distance: 0,
  direction: 0,
  remarks: null,
  date: values[DATE] ? values[DATE].toISOString() : null,
  accuracyOfDate: values[DATE_ACCURACY],
  placeCode: null,
})
