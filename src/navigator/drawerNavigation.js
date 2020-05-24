import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStack from "./appNavigator";
import {APP_STACK} from "../screens/constants";
import {DrawerContent} from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerStyle={{ width: '80%' }}>
            <Drawer.Screen name={APP_STACK} component={AppStack} />
        </Drawer.Navigator>
    );
};