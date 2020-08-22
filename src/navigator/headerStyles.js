import { colors, fonts } from 'Src/consts';

export default {
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerTitleStyle: {
    ...fonts.DEFAULT_NORMAL,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.25,
    color: colors.white,
  },
  headerTintColor: colors.white,
};
