import { StyleSheet } from 'react-native'

import { colors } from '../../consts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    width: '100%',
    paddingLeft: 20,
  },
  titleBlock: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    color: colors.blue,
    fontFamily: 'Lato',
    paddingBottom: 7,
  },
})

export default styles
