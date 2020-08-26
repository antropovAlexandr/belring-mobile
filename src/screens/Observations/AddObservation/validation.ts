import { FIELD_NAME } from './constants'

const {
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

export const tagInformationValidation = (values) => {
  const errors = {}
  const ringsErrors = values[RINGS].map((ring) => ({
    [TAG_NUMBER]: ring && ring[TAG_NUMBER] ? undefined : 'addEditObservation.ringNumberValidation',
    [TAG_TYPE]: ring && ring[TAG_TYPE] ? undefined : 'addEditObservation.ringTypeValidation',
  }))

  if (ringsErrors.length) errors[RINGS] = ringsErrors

  return errors
}

export const birdInformationValidation = (values) => {
  const errors = {}

  if (!values[TYPE_OF_BIRD]) errors[TYPE_OF_BIRD] = 'addEditObservation.typeOfBirdValidation'
  if (!values[BIRD_SEX]) errors[BIRD_SEX] = 'addEditObservation.birdSexValidation'
  if (!values[BIRD_AGE]) errors[BIRD_AGE] = 'addEditObservation.birdAgeValidation'
  if (!values[BIRD_WAS]) errors[BIRD_WAS] = 'addEditObservation.birdWasValidation'
  if (!values[BIRD_STATUS]) errors[BIRD_STATUS] = 'addEditObservation.birdStatusValidation'

  return errors
}

export const obstaclesInformationValidation = (values) => {
  const errors = {}

  if (!values[LOCATION_CONDITION]) errors[LOCATION_CONDITION] = 'addEditObservation.locationСonditionValidation'
  if (!values[PLACE]) errors[PLACE] = 'addEditObservation.placeValidation'
  if (!values[COORDINATE_ACCURACY]) errors[COORDINATE_ACCURACY] = 'addEditObservation.coordinateAccuracyValidation'
  if (!values[DATE]) errors[DATE] = 'addEditObservation.dateValidation'
  if (!values[DATE_ACCURACY]) errors[DATE_ACCURACY] = 'addEditObservation.dateAccuracyValidation'

  return errors
}
