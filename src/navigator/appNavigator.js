import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {
  MAIN_SCREEN,
} from 'Consts/screenNames'

import MainScreen from 'Screens/mainScreen'

import { defaultConfig } from './configs'
import MainHeader from 'Components/mainHeader'

const AppStack = createStackNavigator({
  [MAIN_SCREEN]: {
    screen: MainScreen,
    navigationOptions: {
      title: 'My home',
      headerRight: <MainHeader/>
    },
  },
}, {
  initialRouteName: MAIN_SCREEN,
  defaultNavigationOptions: defaultConfig,
})

export default AppStack
