import { StyleSheet } from 'react-native';

import { colors, fonts } from 'Consts';

export default StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    width: '100%',
  },
  container: {
    justifyContent: 'space-between',
    paddingRight: 18,
    paddingLeft: 18,
  },
  headerText: {
    ...fonts.LATO_SEMIBOLD,
    fontSize: 32,
    lineHeight: 39,
    letterSpacing: 0.24,
    paddingBottom: 20,
    color: colors.blue,
  },
  hintText: {
    ...fonts.DEFAULT_NORMAL,
    marginTop: 15,
    marginBottom: 15,
    color: colors.black06,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  belowInput: {
    marginTop: 15,
  },
  lastInput: {
    marginBottom: 20,
  },
  footerBtn: {
    marginTop: 15,
    paddingVertical: 1,
  },
});
