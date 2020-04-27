import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from '../screens/mainScreen'
import EmptyItemsScreen from '../screens/EmptyItemsScreen'
import AddObservation from '../screens/AddObservation'
import ObservationCreated from '../screens/ObservationCreated'
import MainHeader from '../components/mainHeader'
import {MAIN_SCREEN, EMPTY_ITEMS_SCREEN, ADD_OBSERVATION, OBSERVATION_CREATED} from '../screens/constants'
import {defaultConfig} from './configs'

const AppStack = createStackNavigator({
    [MAIN_SCREEN]: {
        screen: MainScreen,
        navigationOptions: {
            title: 'My home',
            headerRight: () => <MainHeader/>
        },
    },
    [EMPTY_ITEMS_SCREEN]: {
        screen: EmptyItemsScreen,
        navigationOptions: {
            title: 'My home',
            headerRight: () => <MainHeader/>
        },
    },
    [ADD_OBSERVATION]: {
        screen: AddObservation,
        navigationOptions: {
            title: 'ADD_OBSERVATION',
            headerRight: () => <MainHeader/>
        },
    },
    [OBSERVATION_CREATED]: {
        screen: ObservationCreated,
        navigationOptions: {
            title: 'OBSERVATION_CREATED',
            headerRight: () => <MainHeader/>
        },
    },
}, {
    initialRouteName: MAIN_SCREEN,
    defaultNavigationOptions: defaultConfig,
});

export default AppStack
