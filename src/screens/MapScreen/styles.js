import { StyleSheet } from 'react-native'
import { firebrick } from '../../consts/colors'

const styles = StyleSheet.create({
  noPermissionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  noPermissionsText: {
    fontSize: 18,
    color: firebrick,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    transform: [{ scale: 0.6 }],
  },
})

export default styles
