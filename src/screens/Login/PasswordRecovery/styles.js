import { StyleSheet } from 'react-native';
import { blue } from '../../../consts/colors'

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
  main: {
    width: '100%',
  },
  headerText: {
    fontFamily: 'Lato-Semibold',
    fontSize: 32,
    lineHeight: 39,
    letterSpacing: 0.24,
    color: blue,
    textAlign: 'left',
  },
  hintText: {
    marginTop: 20,
    marginBottom: 25,
  },
  resetPswBtn: {
    marginTop: 15,
    paddingVertical: 1,
  },
  footer: {
    width: '100%',
  },
});
