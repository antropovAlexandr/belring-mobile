import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import Login from 'Screens/Login';
import Registration from 'Screens/Login/Registration';
import RegistrationNotification from 'Screens/Login/RegistrationNotification';
import PasswordRecovery from 'Screens/Login/PasswordRecovery';
import AboutApp from 'Screens/AboutApp';

import {
  LOGIN_SCREEN,
  PASSWORD_RECOVERY,
  REGISTRATION_NOTIFICATION_SCREEN,
  REGISTRATION_SCREEN,
  ABOUT_APP_SCREEN,
} from '../screens/constants';
import { defaultConfig } from './configs';
import headerStyles from './headerStyles';

const Stack = createStackNavigator();

const LoginStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName={LOGIN_SCREEN} screenOptions={defaultConfig}>
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={REGISTRATION_SCREEN} component={Registration} />
      <Stack.Screen name={REGISTRATION_NOTIFICATION_SCREEN} component={RegistrationNotification} />
      <Stack.Screen name={PASSWORD_RECOVERY} component={PasswordRecovery} />
      <Stack.Screen
        name={ABOUT_APP_SCREEN}
        component={AboutApp}
        options={{
          headerShown: true,
          title: t('aboutApp.screenTitle'),
          ...headerStyles,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
