import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PATHS from 'Screens/constants'
import LanguageSelect from 'Screens/Onboarding/LanguageSelect'
import Introduction from 'Screens/Onboarding/Introduction'

import { defaultConfig } from './configs'

const Stack = createStackNavigator()

const IntroductionStack = () => (
  <Stack.Navigator initialRouteName={PATHS.LANGUAGE_SCREEN} screenOptions={defaultConfig}>
    <Stack.Screen name={PATHS.LANGUAGE_SCREEN} component={LanguageSelect} />
    <Stack.Screen name={PATHS.INTRODUCTION_SCREEN} component={Introduction} />
  </Stack.Navigator>
)

export default IntroductionStack
