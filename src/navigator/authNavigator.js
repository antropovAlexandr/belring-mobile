import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
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

const Stack = createStackNavigator();

const LoginStack = () => (
    <Stack.Navigator
        initialRouteName={LOGIN_SCREEN}
        screenOptions={defaultConfig}
    >
        <Stack.Screen
            name={LOGIN_SCREEN}
            component={LoginScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={REGISTRATION_SCREEN}
            component={RegistrationScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={REGISTRATION_NOTIFICATION_SCREEN}
            component={RegistrationNotificationScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={PASSWORD_RECOVERY}
            component={PasswordRecovery}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default LoginStack
