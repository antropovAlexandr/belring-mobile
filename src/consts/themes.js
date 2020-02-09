import { DefaultTheme } from 'react-native-paper';
import { blue } from './colors';

export const fonts = {
  regular: 'Muli-Regular', // using
  italic: 'JosefinSans-Italic',
  light: 'JosefinSans-Light',
  lightItalic: 'JosefinSans-LightItalic',
  semibold: 'Muli-SemiBold',
  semiboldItalic: 'JosefinSans-SemiBoldItalic',
  bold: 'Muli-Bold', // usign
  boldItalic: 'JosefinSans-BoldItalic',
  thin: 'JosefinSans-Thin',
  thinItalica: 'JosefinSans-ThinItalic',
};

export const colors = {

};

export const offsets = {
  extraSmall: 5,
  small: 10,
  medium: 15,
  big: 20,
  extraBig: 25,
  large: 30,
  extraLarge: 35,
};

export const paperTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: blue,
    },
};

