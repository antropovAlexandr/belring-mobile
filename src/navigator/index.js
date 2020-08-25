import React, { useRef, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import NavigationService from './NavigationService';
import LoginStack from './authNavigator';
import IntroductionStack from './IntroductionNavigator';
import { AppDrawerNavigator } from './drawerNavigation';
import { userIsFirstEntrySelector, userTokenSelector } from '../screens/Login/selector';

export default function MainNavigator() {
  const token = useSelector(userTokenSelector);
  const isFirstEntry = useSelector(userIsFirstEntrySelector);
  const navigatorRef = useRef(null);

  useEffect(() => {
    NavigationService.setRef(navigatorRef);
  }, []);

  const getStackNavigation = useCallback(() => {
    if (token) return <AppDrawerNavigator />;

    return isFirstEntry ? <IntroductionStack /> : <LoginStack />;
  }, [token, isFirstEntry]);

  return <NavigationContainer ref={navigatorRef}>{getStackNavigation()}</NavigationContainer>;
}
