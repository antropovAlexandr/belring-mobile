import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { Text } from 'react-native-paper'

import EmptyItemsScreen from '../../components/EmptyItemsScreen'

import { loadObservationsRequest } from './reducer'
import { observationLoadingSelector, observationsSelector } from './selector'

const Observations = ({ navigation }) => {
  const dispatch = useDispatch()

  const loading = useSelector(observationLoadingSelector)
  const observations = useSelector(observationsSelector)

  useFocusEffect(
    useCallback(() => {
      dispatch(loadObservationsRequest())
    }, [])
  )

  if (loading) return null
  if (!observations?.length)
    return (
      <EmptyItemsScreen
        title='addEditObservation.titleEmpty'
        description='addEditObservation.descriptionEmpty'
        navigation={navigation}
      />
    )

  //TODO Add ObservationsList component
  return <Text>ObservationsList</Text>
}

export default Observations
