import { StyleSheet } from 'react-native';
import { colors, fonts } from 'Consts';

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
    fontSize: 22,
    color: colors.black054,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  slideContainer: {
    flex: 1,
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
    paddingTop: 10,
    width: '85%',
    minHeight: '27%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...fonts.LATO_SEMIBOLD,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 30,
    color: colors.blue,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '82%',
    paddingTop: 16,
  },
  description: {
    ...fonts.DEFAULT_NORMAL,
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    color: colors.black087,
    textAlign: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    marginHorizontal: 9,
    borderRadius: 5,
    backgroundColor: colors.blueLight,
  },
  backgroundActive: {
    backgroundColor: colors.blue,
  },
  pagination: {
    bottom: 20,
  },
  nextButton: {
    borderRadius: 4,
    backgroundColor: colors.blue,
  },
});

const hitSlop = { top: 10, bottom: 10, right: 10, left: 10 };

export { styles, hitSlop };
