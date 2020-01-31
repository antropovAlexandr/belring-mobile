import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Text } from 'react-native'
import {UserActions} from 'Redux/reducers/userReducer'

const MainHeader = () => {
  console.log(UserActions)
  const dispatch = useDispatch()
  const logout = useCallback(() => {
    dispatch(UserActions.logout())
  }, [])
  return (
    <Text onPress={logout}>
      Logout
    </Text>
  )
}

export default MainHeader
