import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { APP_STACK, LOGIN_STACK } from 'Consts/screenNames'
import SplashScreen from 'react-native-splash-screen'
import { userSelector } from '../../selectors/userSelector'

const AppLoadingScreen = (props) => {
  const token = useSelector(userSelector);
  const bootstrap = useCallback(() => {
    const routeName = token ? APP_STACK : LOGIN_STACK;
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
