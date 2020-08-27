import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native'

import { APP_STACK } from '../screens/constants'
import { DrawerContent } from '../components/DrawerContent'

import AppStack from './appNavigator'

const Drawer = createDrawerNavigator()

export const AppDrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} drawerStyle={styles.drawer}>
    <Drawer.Screen name={APP_STACK} component={AppStack} />
  </Drawer.Navigator>
)

const styles = StyleSheet.create({
  drawer: { width: '80%' },
})
