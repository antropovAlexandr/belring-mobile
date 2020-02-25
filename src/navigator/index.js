import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { Platform } from 'react-native';
import {
  APP_LOADING_SCREEN,
  APP_STACK,
  LOGIN_STACK,
  INTRODUCTION_STACK
} from '../screens/constants';
import AppLoadingScreen from '../screens/appLoadingScreen';
import AppStack from './appNavigator';
import LoginStack from './authNavigator';
import IntroductionStack from "./IntroductionNavigator";

const customCreateSwitchNavigator = Platform.select({
  ios: createAnimatedSwitchNavigator,
  android: createSwitchNavigator
});

export default customCreateSwitchNavigator({
  [APP_LOADING_SCREEN]: AppLoadingScreen,
  [APP_STACK]: AppStack,
  [LOGIN_STACK]: LoginStack,
  [INTRODUCTION_STACK]: IntroductionStack,
}, {
  initialRouteName: APP_LOADING_SCREEN,
  transition: (
    <Transition.Together>
      <Transition.Out
        type="slide-top"
        durationMs={400}
        interpolation="easeIn"
      />
      <Transition.In type="fade" durationMs={500} />
    </Transition.Together>
  ),
});
