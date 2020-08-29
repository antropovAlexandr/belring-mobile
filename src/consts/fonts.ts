import { Platform } from 'react-native'

const font = (fontFamily: string, fontWeight: string) => ({ fontFamily, fontWeight })

const isAndroid = Platform.OS === 'android'

export const fonts = {
  DEFAULT_NORMAL: font(isAndroid ? 'sans-serif' : 'Helvetica Neue', 'normal'),
  DEFAULT_LIGHT: font(isAndroid ? 'sans-serif-light' : 'HelveticaNeue-Light', 'normal'),
  DEFAULT_MEDIUM: font(isAndroid ? 'sans-serif-medium' : 'HelveticaNeue-Medium', 'normal'),
  DEFAULT_SEMIBOLD: font(isAndroid ? 'sans-serif-light' : 'HelveticaNeue-Light', 'bold'),
  DEFAULT_BOLD: font(isAndroid ? 'sans-serif' : 'HelveticaNeue-Bold', isAndroid ? 'bold' : 'normal'),

  LATO_NORMAL: font('Lato-Regular', 'normal'),
  LATO_LIGHT: font('Lato-Light', 'normal'),
  LATO_MEDIUM: font('Lato-Medium', 'normal'),
  LATO_SEMIBOLD: font('Lato-Semibold', 'normal'),
  LATO_BOLD: font('Lato-Bold', 'normal'),
}
