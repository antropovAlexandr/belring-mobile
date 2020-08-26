import { DefaultTheme } from 'react-native-paper'
import { colors } from './colors'

export const paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    primary: colors.blue,
  },
}
