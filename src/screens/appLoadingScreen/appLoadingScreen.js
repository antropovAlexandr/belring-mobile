import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { APP_STACK, LOGIN_STACK, INTRODUCTION_STACK } from '../constants'
import SplashScreen from 'react-native-splash-screen'
import { userTokenSelector, userFirstEntrySelector } from '../../selectors/userSelector'

const getRoutName = (token, isFirstEntry) => {
  if (token) return APP_STACK;
  // TODO TEST!!!!!
  // return (isFirstEntry) ? INTRODUCTION_STACK : LOGIN_STACK;
  return APP_STACK;
};

const AppLoadingScreen = (props) => {
  const token = useSelector(userTokenSelector);
  const isFirstEntry = useSelector(userFirstEntrySelector);

  const bootstrap = useCallback(() => {
    const routeName = getRoutName(token, isFirstEntry);
    props.navigation.navigate(routeName)
  }, [token]);

  useEffect(() => {
    bootstrap()
  }, [token]);

  useEffect(() => {
    SplashScreen.hide()
  }, []);
  return null
};

export default AppLoadingScreen
