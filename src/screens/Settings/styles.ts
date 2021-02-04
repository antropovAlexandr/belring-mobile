import { StyleSheet } from 'react-native'

import { black087, black06 } from '../../consts/colors'

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 30,
  },
  header: {
    fontSize: 25,
    lineHeight: 30,
    color: black087,
    fontFamily: 'Lato-Semibold',
  },
  section: {
    marginTop: 10,
    marginBottom: 5,
  },
  title: {
    color: black087,
    fontFamily: 'System',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  label: {
    color: black06,
    fontFamily: 'System',
    fontSize: 12,
    padding: 0,
    marginTop: 10,
  },
  input: {
    marginBottom: 13,
  },
  buttonContainer: {
    marginBottom: 10,
    marginTop: 15,
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonStyle: {
    width: 150,
  },
})

export default styles
