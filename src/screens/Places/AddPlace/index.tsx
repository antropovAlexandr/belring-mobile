import React, { useCallback, useMemo, memo } from 'react'
import { Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'

import { placesSelector } from '../selector'
import { updateUserPlacesRequest } from '../reducer'

import AddPlaceView from './AddPlaceView'
import { locationValidation } from './validation'
import { FIELD_NAME } from './constants'
import { getPlacesForUpdate } from './utils'
import { Props } from './types'

const { LOCATION_NAME, LOCATION_COORDINATE } = FIELD_NAME
export default memo(({ navigation, route }: Props) => {
  const { params = {} } = route
  const { locationName, latitude, longitude, placeId } = params

  const initialValues = useMemo(
    () => ({
      [LOCATION_NAME]: locationName ? locationName : null,
      [LOCATION_COORDINATE]: latitude && longitude ? { latitude, longitude } : null,
    }),
    [locationName, latitude, longitude]
  )

  const dispatch = useDispatch()
  const userPlaces = useSelector(placesSelector)
  const onSubmit = useCallback(
    (values) => {
      const places = getPlacesForUpdate(values, userPlaces, placeId)
      dispatch(updateUserPlacesRequest({ places }))
    },
    [dispatch, placeId, userPlaces]
  )

  return (
    <Form
      onSubmit={onSubmit}
      validate={locationValidation}
      mutators={{
        setFormValue: ([fieldName, value], state, { changeValue }) => {
          changeValue(state, fieldName, () => value)
        },
      }}
      initialValues={initialValues}
      render={({ handleSubmit, form, values = {} }) => (
        <AddPlaceView
          onPressNewLocation={handleSubmit}
          form={form}
          navigation={navigation}
          values={values}
          isSave={placeId !== undefined}
        />
      )}
    />
  )
})
