import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from '../screens/mainScreen'
import EmptyItemsScreen from '../screens/EmptyItemsScreen'
import AddObservation from '../screens/AddObservation'
import ObservationCreated from '../screens/ObservationCreated'
import MainHeader from '../components/mainHeader'
import {MAIN_SCREEN, EMPTY_ITEMS_SCREEN, ADD_OBSERVATION, OBSERVATION_CREATED} from '../screens/constants'
import {defaultConfig} from './configs'

const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator
        initialRouteName={MAIN_SCREEN}
        screenOptions={defaultConfig}
        animation="fade"
        headerMode="float"
    >
        <Stack.Screen
            name={MAIN_SCREEN}
            component={MainScreen}
            options={{
                title: 'My app',
                headerRight: () => <MainHeader/>
            }}
        />
        <Stack.Screen
            name={EMPTY_ITEMS_SCREEN}
            component={EmptyItemsScreen}
            initialParams={{
                title: 'My home',
                headerRight: () => <MainHeader/>
            }}
        />
        <Stack.Screen
            name={ADD_OBSERVATION}
            component={AddObservation}
            options={{
                title: 'ADD_OBSERVATION',
                headerRight: () => <MainHeader/>
            }}
        />
        <Stack.Screen
            name={OBSERVATION_CREATED}
            component={ObservationCreated}
            initialParams={{
                title: 'OBSERVATION_CREATED',
                headerRight: () => <MainHeader/>
            }}
        />
    </Stack.Navigator>
);

export default AppStack
