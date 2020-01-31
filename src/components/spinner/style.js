import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  containerForActivityIndicator: {
    width: width * 0.2,
    minHeight: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
