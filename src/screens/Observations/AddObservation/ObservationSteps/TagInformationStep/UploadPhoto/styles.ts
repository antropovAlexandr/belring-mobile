import { StyleSheet } from 'react-native'

import { colors } from 'Consts'

export default StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  uploadPhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 122,
    width: 122,
    borderColor: colors.black02,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'dashed',
    backgroundColor: colors.whiteGray,
  },
  photo: {
    height: 122,
    width: 122,
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
  },
})
