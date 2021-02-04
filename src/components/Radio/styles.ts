import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 48,
  },
  row: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    paddingRight: 8,
  },
  label: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'System',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
})

export default styles
