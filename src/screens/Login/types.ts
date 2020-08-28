import { ImageSourcePropType } from 'react-native'

export type LoginViewProps = {
  logoImg: ImageSourcePropType
  onPressLogin: () => void
  onPressRegistration: () => void
  onPressResetPassword: () => void
  navigateToAboutApp: () => void
}
