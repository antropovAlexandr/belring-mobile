import React, { useEffect, useCallback } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, connect } from 'react-redux'
import Store from 'Redux/store'
import { BackHandler, StatusBar, SafeAreaView } from 'react-native'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import {I18nextProvider} from 'react-i18next';
import MainNavigator from './src/navigator'
import Root from 'Screens/RootScreen';
import CustomSpinner from 'Components/customSpinner'
import { colors } from 'Consts/themes'
import i18 from './src/i18n';

import { Provider as PaperProvider } from 'react-native-paper';
import { paperTheme } from "./src/consts/themes";


const {store, persistor} = Store;

const AppWith = createReduxContainer(MainNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.navigatorReducer,
});

const AppWithNavigationState = connect(mapStateToProps)(AppWith);

const App = () => {
  const hardwareBackButtonAction = useCallback(() => {

  }, []);
  useEffect(() => {
    const listener = BackHandler.addEventListener('hardwareBackPress', hardwareBackButtonAction);
    return listener.remove
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18}>
            <PaperProvider theme={paperTheme}>
              <Root>
                <SafeAreaView style={{ flex: 1 }} >
                  <StatusBar barStyle='dark-content' />
                  <CustomSpinner color={colors.primary}/>
                  <AppWithNavigationState />
                </SafeAreaView>
              </Root>
            </PaperProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  )
};

export default App
