import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import ObservationCreated from '../screens/Observations/ObservationCreated';
import AddPlace from '../screens/Places/AddPlace';
import Places from '../screens/Places';
import MapScreen from '../screens/MapScreen';
import Observations from '../screens/Observations';
import AddObservation from '../screens/Observations/AddObservation';
import Settings from '../screens/Settings';
import AboutApp from '../screens/AboutApp';
import Header from '../components/Header';
import {
  ADD_OBSERVATION,
  OBSERVATION_CREATED,
  ADD_PLACE,
  MAP_SCREEN,
  PLACES,
  OBSERVATIONS_SCREEN,
  SETTINGS_SCREEN,
  ABOUT_APP_SCREEN,
} from '../screens/constants';
import { defaultConfig } from './configs';

const Stack = createStackNavigator();

const AppStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={OBSERVATIONS_SCREEN}
      animation="fade"
      headerMode="screen"
      screenOptions={{
        ...defaultConfig,
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name={OBSERVATIONS_SCREEN}
        component={Observations}
        options={{
          title: t('addEditObservation.screenTitle'),
          isShowMenu: true,
        }}
      />
      <Stack.Screen
        name={ADD_OBSERVATION}
        component={AddObservation}
        options={{
          title: t('addEditObservation.newObservationTitle'),
          isShowClose: true,
        }}
      />
      <Stack.Screen
        name={OBSERVATION_CREATED}
        component={ObservationCreated}
        initialParams={{
          title: t('addEditObservation.screenTitle'),
        }}
      />
      <Stack.Screen
        name={PLACES}
        component={Places}
        options={{
          title: t('places.screenTitle'),
          isShowMenu: true,
        }}
      />
      <Stack.Screen
        name={ADD_PLACE}
        component={AddPlace}
        options={{
          title: t('places.screenTitle'),
          isShowMenu: true,
        }}
      />
      <Stack.Screen name={MAP_SCREEN} component={MapScreen} />
      <Stack.Screen
        name={SETTINGS_SCREEN}
        component={Settings}
        options={{
          title: t('settings.screenTitle'),
          isShowMenu: true,
        }}
      />
      <Stack.Screen
        name={ABOUT_APP_SCREEN}
        component={AboutApp}
        options={{
          title: t('aboutApp.screenTitle'),
          isShowMenu: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
