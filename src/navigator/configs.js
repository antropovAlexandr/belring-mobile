import { colors } from 'Consts/themes'
import { Platform } from 'react-native'

export const defaultConfig = {
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.primary,
    height: Platform.OS === 'ios' ? 40 : 70,
    paddingTop: Platform.OS === 'ios' ? 0 : 30,
    elevation: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  headerBackTitleStyle: {
    color: colors.white,
  },
  headerTitleStyle: {
    color: colors.white,
  },
}
