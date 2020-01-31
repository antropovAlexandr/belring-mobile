import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {
  LOGIN_SCREEN,
} from 'Consts/screenNames'

import LoginScreen from 'Screens/LoginScreen'
import { defaultConfig } from './configs'


const LoginStack = createStackNavigator({
  [LOGIN_SCREEN]: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
}, {
  initialRouteName: LOGIN_SCREEN,
  defaultNavigationOptions: defaultConfig,
})

export default LoginStack
