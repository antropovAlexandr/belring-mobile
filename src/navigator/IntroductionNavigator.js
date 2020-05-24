import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {
    LANGUAGE_SCREEN,
    INTRODUCTION_SCREEN,
} from '../screens/constants';
import LanguageSelect from "../screens/Onboarding/LanguageSelect";
import Introduction from "../screens/Onboarding/Introduction";
import { defaultConfig } from "./configs";

const Stack = createStackNavigator();

const IntroductionStack = () => (
    <Stack.Navigator
        initialRouteName={LANGUAGE_SCREEN}
        screenOptions={defaultConfig}
    >
        <Stack.Screen
            name={LANGUAGE_SCREEN}
            component={LanguageSelect}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={INTRODUCTION_SCREEN}
            component={Introduction}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default IntroductionStack;
