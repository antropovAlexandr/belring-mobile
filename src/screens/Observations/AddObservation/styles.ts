import { StyleSheet } from 'react-native'
import { colors, fonts } from 'Consts'

export default StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  header: {
    paddingVertical: 10,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.black06,
  },
  headerText: {
    ...fonts.DEFAULT_NORMAL,
    color: colors.black087,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 28,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 15,
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
  uploadPhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 122,
    width: 122,
    borderColor: colors.black02,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'dashed',
    backgroundColor: colors.whiteGray,
  },
  photo: {
    height: 122,
    width: 122,
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
  },
  deleteBtn: {
    alignItems: 'flex-end',
  },
  oneMoreRingBtn: {
    marginTop: 5,
  },
  mobileAppText: {
    color: colors.greenLight,
  },
  dateField: {
    backgroundColor: 'transparent',
  },
})
