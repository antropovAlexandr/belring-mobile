import React from 'react';
import {View, Text} from 'react-native';
import {Button} from "react-native-paper";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import i18n, {LANG_TYPES} from "../../i18n";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {INTRODUCTION_SCREEN} from "../constants";
import {styles} from './styles';


const LanguageSelect = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const onChangeLanguage = (language) => {
        dispatch(NavigationActions.navigate({routeName: INTRODUCTION_SCREEN}));
        i18n.changeLanguage(language);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    mode="outlined"
                    style={styles.buttonStyle}
                    onPress={() => onChangeLanguage(LANG_TYPES.RU)}
                >{t('languageSelect.russian')}</Button>
                <Button
                    mode="outlined"
                    style={styles.buttonStyle}
                    onPress={() => onChangeLanguage(LANG_TYPES.EN)}
                >{t('languageSelect.english')}</Button>
            </View>
        </View>
    );
};

export default LanguageSelect;
