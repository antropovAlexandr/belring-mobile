import { StyleSheet } from 'react-native';
import { colors, fonts } from 'Consts';

const styles = StyleSheet.create({
  message: {
    ...fonts.DEFAULT_NORMAL,
    color: colors.black06,
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
});

export default styles;
