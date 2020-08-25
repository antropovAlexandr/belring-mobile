import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { I18nextProvider } from 'react-i18next';

import ErrorModal from "Components/ErrorModal";
import Spinner from 'Components/Spinner';
import MainNavigator from 'Navigator';
import { store, persistor } from 'Store';
import { paperTheme, colors } from 'Consts';
import i18 from './src/i18n';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18}>
          <PaperProvider theme={paperTheme}>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar barStyle="light-content" backgroundColor={colors.black} />
              <Spinner />
              <ErrorModal />
              <MainNavigator />
            </SafeAreaView>
          </PaperProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
