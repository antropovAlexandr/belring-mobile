import React, {useCallback} from 'react';
import {Text, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Button} from "react-native-paper";
import {useTranslation} from "react-i18next";
import {LOGIN_SCREEN} from "../../constants";
import styles from './styles';

const logoImg = require('assets/images/logo/logo.png');

const RegistrationNotification = ({ route, navigation }) => {
    const { origin = 'registration' } = route.params;
    const { t } = useTranslation();

    const handleNavigateToLoginScreen = useCallback(() => {
        navigation.navigate(LOGIN_SCREEN);
    }, [navigation]);

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
                    onPress={handleNavigateToLoginScreen}
                >
                    {t('registrationEmailSent.goToLogin')}
                </Button>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default RegistrationNotification;
