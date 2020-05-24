import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { black054, black087, blueLight, blue } from '../../../consts/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  closeBtnContainer: {
    position: 'absolute',
    top: 20,
    right: 12,
    zIndex: 100,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: black054,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 25,
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
    width: '100%',
    overflow: 'hidden',
  },
  slideImg: {
    width: 'auto',
    height: '100%',
  },
  article: {
    paddingTop: 2,
    width: '85%',
    minHeight: '27%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Lato-Semibold',
    fontSize: 24,
    lineHeight: 26,
    color: blue,
  },
  descriptionContainer: {
    paddingTop: 5,
    flex: 1,
    width: '82%',
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    color: black087,
  },
  dot: {
    width: 6,
    height: 6,
    marginRight: 9,
    marginLeft: 9,
    borderRadius: 5,
    backgroundColor: blueLight,
  },
  backgroundActive: {
    backgroundColor: blue,
  },
  pagination: {
    bottom: 20,
  },
});

const hitSlop = { top: 10, bottom: 10, right: 10, left: 10 };

export { styles, hitSlop };
