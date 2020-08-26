import { StyleSheet } from 'react-native'
import { colors } from 'Consts'

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.blueMediumSecond,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    height: 50,
  },
  btnLabel: {
    color: 'white',
    fontSize: 17,
  },
})
