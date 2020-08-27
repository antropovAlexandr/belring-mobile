import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { Text } from 'react-native-paper'

import EmptyItemsScreen from '../../components/EmptyItemsScreen'

import { loadObservationsRequest } from './reducer'
import { observationLoadingSelector, observationsSelector } from './selector'

export default memo(({ navigation }: Props) => {
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
})

interface Props {
  navigation: StackNavigationProp<any>
}
