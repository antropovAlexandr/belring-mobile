import { StyleSheet } from 'react-native'
import { colors, fonts } from 'Consts'

const styles = StyleSheet.create({
  container: {},
  margin: {
    paddingTop: 30,
    marginHorizontal: 20,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  image: {
    marginBottom: 20,
    width: 185,
    height: 100,
  },
  epamLogo: {
    marginTop: 17,
    height: 24,
    width: 68,
  },
  version: {
    fontSize: 12,
    marginTop: 3,
  },
  buttonWrapper: {
    marginTop: 20,
  },
  text: {
    ...fonts.DEFAULT_NORMAL,
    marginTop: 10,
    color: colors.black087,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  article: {
    marginTop: 20,
  },
  title: {
    ...fonts.LATO_SEMIBOLD,
    color: colors.blue,
    fontSize: 25,
    lineHeight: 30,
  },
  contactDetails: {
    marginTop: 20,
    marginLeft: 20,
  },
  developApp: {
    marginLeft: 20,
    marginBottom: 35,
  },
  contactDetailsTitle: {
    ...fonts.DEFAULT_NORMAL,
    color: colors.black06,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  contactDetailsItem: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  contactDetailsLabel: {
    ...fonts.DEFAULT_NORMAL,
    color: colors.black087,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  contactDetailsInput: {
    ...fonts.DEFAULT_NORMAL,
    color: colors.black06,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
})

export default styles
