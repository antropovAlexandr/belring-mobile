import { CardStyleInterpolators } from '@react-navigation/stack';

import { colors } from 'Consts';

export const defaultConfig = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
  headerShown: false,
  cardStyle: {
    backgroundColor: colors.white,
  },
};
