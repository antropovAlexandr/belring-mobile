import { StyleSheet } from 'react-native'
import { colors, fonts } from 'Consts'

export default StyleSheet.create({
  scrollContainer: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
  titleBlock: {
    paddingVertical: 10,
  },
  title: {
    ...fonts.LATO_SEMIBOLD,
    fontSize: 25,
    lineHeight: 30,
    color: colors.black087,
    paddingBottom: 7,
  },
  description: {
    ...fonts.DEFAULT_NORMAL,
    color: colors.black06,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: '100%',
    marginBottom: 17,
  },
})
