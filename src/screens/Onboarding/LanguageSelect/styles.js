import { StyleSheet } from 'react-native'

import { colors } from 'Consts'

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 110,
  },
  buttonStyle: {
    marginVertical: 18,
    width: 192,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grayMedium,
  },
})

export { styles }
