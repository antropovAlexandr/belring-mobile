import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import RegistrationNotificationScreen from "../screens/RegistrationNotificationScreen";
import PasswordRecovery from "../screens/PasswordRecovery";
import {
    LOGIN_SCREEN,
    PASSWORD_RECOVERY,
    REGISTRATION_NOTIFICATION_SCREEN,
    REGISTRATION_SCREEN
} from '../screens/constants'
import {defaultConfig} from './configs'



const LoginStack = createStackNavigator({
    [LOGIN_SCREEN]: {
        screen: LoginScreen,
        navigationOptions: { headerShown: false }
    },
    [REGISTRATION_SCREEN]: {
        screen: RegistrationScreen,
        navigationOptions: { headerShown: false }
    },
    [REGISTRATION_NOTIFICATION_SCREEN]: {
        screen: RegistrationNotificationScreen,
        navigationOptions: { headerShown: false }
    },
    [PASSWORD_RECOVERY]: {
        screen: PasswordRecovery,
        navigationOptions: { headerShown: false }
    },
}, {
    initialRouteName: LOGIN_SCREEN,
    defaultNavigationOptions: defaultConfig,
});

export default LoginStack
