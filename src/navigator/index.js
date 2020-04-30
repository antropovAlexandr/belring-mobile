import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AppStack from './appNavigator';
import LoginStack from './authNavigator';
import IntroductionStack from "./IntroductionNavigator";
import {useSelector} from "react-redux";
import {userFirstEntrySelector, userTokenSelector} from "../selectors/userSelector";

const getStackNavigation = (token, isFirstEntry) => {
    if(token) return <AppStack />;
    return isFirstEntry ? <IntroductionStack /> : <LoginStack />;
};

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export default () => {
    const token = useSelector(userTokenSelector);
    const isFirstEntry = useSelector(userFirstEntrySelector);

    return (
        <NavigationContainer ref={navigationRef}>
            {getStackNavigation(token, isFirstEntry)}
        </NavigationContainer>
    );
};
