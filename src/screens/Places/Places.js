import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PlacesList from './PlacesList'
import EmptyItemsScreen from '../../components/EmptyItemsScreen'
import { useFocusEffect } from '@react-navigation/native'
import { loadUserPlacesRequest } from './reducer'
import { placesLoadingSelector, placesSelector } from './selector'
import { userIdSelector } from '../Login/selector'

const Places = ({ navigation }) => {
  const { t } = useTranslation()
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
}

export default Places
