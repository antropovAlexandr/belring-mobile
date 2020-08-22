import { StyleSheet, Dimensions } from 'react-native';

import { colors, fonts } from 'Consts';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'stretch',
    paddingHorizontal: 20,
    minHeight: '15%',
  },
  footer: {
    alignItems: 'flex-end',
    flex: 1,
    paddingVertical: 40,
    paddingRight: 35,
  },
  title: {
    ...fonts.LATO_SEMIBOLD,
    color: colors.blue,
    fontSize: 32,
    letterSpacing: 0.24,
    lineHeight: 39,
    marginBottom: 40,
  },
  description: {
    ...fonts.DEFAULT_NORMAL,
    color: colors.black06,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  image: {
    height: '100%',
    aspectRatio: 470 / width, // for appropriate right padding at all devices
    resizeMode: 'contain',
    borderWidth: 1,
  },
});

export default styles;
