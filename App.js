import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import { StatusBar, SafeAreaView } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import {I18nextProvider} from 'react-i18next';
import MainNavigator from './src/navigator'
import { store, persistor } from './src/store'
import Spinner from './src/components/Spinner'
import i18 from './src/i18n';
import { paperTheme } from "./src/consts/themes";
import ErrorModal from "./src/components/ErrorModal";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18}>
            <PaperProvider theme={paperTheme}>
                <SafeAreaView style={{ flex: 1 }} >
                  <StatusBar barStyle='dark-content' />
                  <Spinner />
                  <ErrorModal />
                  <MainNavigator />
                </SafeAreaView>
            </PaperProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  )
};

export default App
