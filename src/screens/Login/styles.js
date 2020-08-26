import { StyleSheet } from 'react-native'
import { colors } from 'Consts'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  loginContainer: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  infoImgContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
  },
  infoIcon: {
    fontSize: 34,
    color: colors.grayMedium,
  },
  logoImg: {
    marginTop: 30,
    aspectRatio: 290 / 153, // assets image size
    height: 80,
    alignSelf: 'center',
  },
  headerText: {
    paddingVertical: 18,
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    textAlign: 'center',
    color: colors.black06,
  },
  footer: {
    width: '100%',
  },
  signInBtn: {
    marginTop: 5,
    paddingVertical: 1,
  },
  signInBtnText: {
    letterSpacing: 1.25,
  },
  signUpBtn: {
    marginTop: 15,
  },
  signUpBorder: {
    borderColor: colors.black012,
  },
  restorePswBtn: {
    marginTop: 10,
  },
  buttonText: {
    letterSpacing: 0,
  },
  showHidePassIcon: {
    zIndex: 1,
    position: 'absolute',
    top: 23,
    right: 15,
  },
  inputIcon: {
    width: 24,
    height: 24,
  },
})

export const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 }
