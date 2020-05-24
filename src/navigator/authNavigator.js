import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Login from '../screens/Login'
import Registration from '../screens/Login/Registration'
import RegistrationNotification from "../screens/Login/RegistrationNotification";
import PasswordRecovery from "../screens/Login/PasswordRecovery";
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
            component={Login}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={REGISTRATION_SCREEN}
            component={Registration}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={REGISTRATION_NOTIFICATION_SCREEN}
            component={RegistrationNotification}
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
