import React from 'react';
import {Text, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useDispatch} from "react-redux";
import {Button} from "react-native-paper";
import {useTranslation} from "react-i18next";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {LOGIN_SCREEN} from "../../consts/screenNames";
import styles from './styles';

const logoImg = require('assets/images/logo/logo.png');

const RegistrationNotificationScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const origin = navigation.getParam('origin', 'registration');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Image style={styles.logoImg} resizeMode="contain" source={logoImg}/>
                <Text style={styles.headerText}>{t('login.bandingCenter')}</Text>
                <Text style={styles[`${origin}StatusText`]}>{t(`${origin}.statusText`)}</Text>
                <Text style={styles.hintText}>{t(`${origin}.hintText`)}</Text>
                <Button
                    mode="contained"
                    style={styles.backBtn}
                    labelStyle={styles.backBtnText}
                    onPress={() => dispatch(NavigationActions.navigate({ routeName: LOGIN_SCREEN }))}
                >
                    {t('registrationEmailSent.goToLogin')}
                </Button>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default RegistrationNotificationScreen;
