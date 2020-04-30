import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Text } from 'react-native'
import {UserActions} from '../../redux/reducers/userReducer'

const MainHeader = ({ navigation }) => {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(UserActions.logout())
  }, []);
  return (
    <Text onPress={logout}>
      Logout
    </Text>
  )
};

export default MainHeader
