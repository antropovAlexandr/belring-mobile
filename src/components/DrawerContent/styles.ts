import { StyleSheet } from 'react-native'

import { colors } from '../../consts'

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: 30,
  },
  userInfoSection: {
    paddingBottom: 20,
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
  },
  logo: { width: 150 },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerSection: {
    marginTop: 10,
  },
  drawerItem: {
    color: colors.blue,
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
})

export default styles
