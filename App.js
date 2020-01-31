import React, { useEffect, useCallback } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, connect } from 'react-redux'
import Store from 'Redux/store'
import { BackHandler, StatusBar, SafeAreaView } from 'react-native'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import MainNavigator from 'Navigator'
import Root from 'Screens/RootScreen';
import CustomSpinner from 'Components/customSpinner'
import { colors } from 'Consts/themes'

const {store, persistor} = Store

const AppWith = createReduxContainer(MainNavigator, 'root')

const mapStateToProps = (state) => ({
  state: state.navigatorReducer,
})

const AppWithNavigationState = connect(mapStateToProps)(AppWith)

const App = () => {
  const hardwareBackButtonAction = useCallback(() => {

  }, [])
  useEffect(() => {
    const listener = BackHandler.addEventListener('hardwareBackPress', hardwareBackButtonAction)
    return listener.remove
  })
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root>
          <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }} >
            <StatusBar barStyle='dark-content' />
            <CustomSpinner color={colors.primary}/>
            <AppWithNavigationState />
          </SafeAreaView>
        </Root>
      </PersistGate>
    </Provider>
  )
}

export default App
