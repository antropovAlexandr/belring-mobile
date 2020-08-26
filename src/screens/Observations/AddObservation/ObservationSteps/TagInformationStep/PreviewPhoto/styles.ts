import { StyleSheet } from 'react-native'
import { colors } from 'Consts'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  closeBtnContainer: {
    position: 'absolute',
    top: 20,
    left: 12,
    zIndex: 100,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: colors.black054,
  },
  slideContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
  },
  slideImgContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  slideImg: {
    width: 'auto',
    height: '60%',
  },
  dot: {
    width: 6,
    height: 6,
    marginRight: 9,
    marginLeft: 9,
    borderRadius: 5,
    backgroundColor: colors.blueLight,
  },
  backgroundActive: {
    backgroundColor: colors.blue,
  },
  pagination: {
    bottom: 20,
  },
})

export const hitSlop = { top: 10, bottom: 10, right: 10, left: 10 }
