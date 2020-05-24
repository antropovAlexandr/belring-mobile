import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AppStack from './appNavigator';
import LoginStack from './authNavigator';
import IntroductionStack from "./IntroductionNavigator";
import {useSelector} from "react-redux";
import {AppDrawerNavigator} from "./drawerNavigation";
import {userIsFirstEntrySelector, userTokenSelector} from "../screens/Login/selector";

const getStackNavigation = (token, isFirstEntry) => {
    if(token) return <AppDrawerNavigator />;
    return isFirstEntry ? <IntroductionStack /> : <LoginStack />;
};

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export default () => {
    const token = useSelector(userTokenSelector);
    const isFirstEntry = useSelector(userIsFirstEntrySelector);

    return (
        <NavigationContainer ref={navigationRef}>
            {getStackNavigation(token, isFirstEntry)}
        </NavigationContainer>
    );
};
