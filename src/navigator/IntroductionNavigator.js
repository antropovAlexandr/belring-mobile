import { createStackNavigator } from 'react-navigation-stack';
import { LANGUAGE_SCREEN, INTRODUCTION_SCREEN } from '../screens/constants';
import LanguageSelect from "../screens/LanguageSelect";
import Introduction from "../screens/Introduction";
import { defaultConfig } from "./configs";

const IntroductionStack = createStackNavigator({
    [LANGUAGE_SCREEN]: {
        screen: LanguageSelect,
        navigationOptions: { headerShown: false }
    },
    [INTRODUCTION_SCREEN]: {
        screen: Introduction,
        navigationOptions: { headerShown: false }
    },
}, {
    initialRouteName: LANGUAGE_SCREEN,
    defaultNavigationOptions: defaultConfig,
});
export default IntroductionStack;
