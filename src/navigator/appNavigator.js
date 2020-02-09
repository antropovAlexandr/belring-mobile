import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '../screens/mainScreen'
import MainHeader from '../components/mainHeader'
import { MAIN_SCREEN } from '../consts/screenNames'
import { defaultConfig } from './configs'

const AppStack = createStackNavigator({
  [MAIN_SCREEN]: {
    screen: MainScreen,
    navigationOptions: {
      title: 'My home',
      headerRight: () => <MainHeader/>
    },
  },
}, {
  initialRouteName: MAIN_SCREEN,
  defaultNavigationOptions: defaultConfig,
});

export default AppStack
