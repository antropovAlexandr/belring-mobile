import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallContainer: {
    backgroundColor: '#fff',
    width: width * 0.75,
    minHeight: height * 0.2,
    maxHeight: height * 0.6 ,
    borderRadius: 10,
  },
  bigContainer: {
    backgroundColor: '#fff',
    minHeight: height * 0.6,
    width: width * 0.9,
    maxHeight: height * 0.9,
    borderRadius: 10,
  },
  closeButton: {
    top: 10,
    right: 10,
    position: 'absolute',
  },
});
