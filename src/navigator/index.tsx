import React, { useRef, useEffect, useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import { userIsFirstEntrySelector, userTokenSelector } from '../screens/Login/selector'

import { setRef } from './NavigationService'
import LoginStack from './authNavigator'
import IntroductionStack from './IntroductionNavigator'
import { AppDrawerNavigator } from './drawerNavigation'

export default function MainNavigator() {
  const token = useSelector(userTokenSelector)
  const isFirstEntry = useSelector(userIsFirstEntrySelector)
  const navigatorRef = useRef(null)

  useEffect(() => {
    setRef(navigatorRef)
    SplashScreen.hide()
  }, [])

  const getStackNavigation = useCallback(() => {
    if (token) return <AppDrawerNavigator />

    return isFirstEntry ? <IntroductionStack /> : <LoginStack />
  }, [token, isFirstEntry])

  return <NavigationContainer ref={navigatorRef}>{getStackNavigation()}</NavigationContainer>
}
