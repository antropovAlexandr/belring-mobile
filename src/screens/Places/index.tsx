import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import EmptyItemsScreen from '../../components/EmptyItemsScreen'
import { userIdSelector } from '../Login/selector'

import PlacesList from './PlacesList'
import { loadUserPlacesRequest } from './reducer'
import { placesLoadingSelector, placesSelector } from './selector'

export default memo(({ navigation }: Props) => {
  const dispatch = useDispatch()
  const loading = useSelector(placesLoadingSelector)
  const id = useSelector(userIdSelector)
  const places = useSelector(placesSelector)

  useFocusEffect(
    useCallback(() => {
      if (id) dispatch(loadUserPlacesRequest(id))
    }, [id])
  )

  if (loading) return null
  if (!places)
    return <EmptyItemsScreen title='places.titleEmpty' description='places.descriptionEmpty' navigation={navigation} />

  return <PlacesList places={places} navigation={navigation} />
})

interface Props {
  navigation: StackNavigationProp<any>
}
