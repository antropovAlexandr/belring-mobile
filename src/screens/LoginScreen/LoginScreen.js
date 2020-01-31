import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { UserActions } from 'Redux/reducers/userReducer'
import { LOGIN } from 'Consts/utils'
import { Button } from 'react-native';
import styles from './styles'

const LoginScreen = () => {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Button
        onPress={() => dispatch(UserActions.login())} title={LOGIN}>
        {LOGIN}
      </Button>
    </View>
  )
}

export default LoginScreen
