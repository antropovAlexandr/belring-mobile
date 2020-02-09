import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from "react-i18next";
import FormFieldWithTextInput from "../../components/FormFieldWithTextInput";
import { grayMedium } from "../../consts/colors";
import styles from "./styles";


const LoginScreenView = ({ logoImg, onPressLogin, onPressRegistration, onPressResetPassword }) => {
    const { t } = useTranslation();
    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.loginContainer}>
                <Image style={styles.logoImg} resizeMode="contain" source={logoImg}/>
                <Text style={styles.headerText}>{t('login.bandingCenter')}</Text>
                <TouchableOpacity
                    style={styles.infoImgContainer}
                    // onPress={navigateToAboutApp}
                    activeOpacity={0.8}
                >
                    <Icon name="information-outline" size={34} color={grayMedium}/>
                </TouchableOpacity>
                <FormFieldWithTextInput
                    name="email"
                    component={TextInput}
                    label={t('login.email')}
                    mode="outlined"
                />
                <FormFieldWithTextInput
                    name="password"
                    component={TextInput}
                    label={t('login.password')}
                    mode="outlined"
                    secureTextEntry
                />
                <Button
                    mode="contained"
                    style={styles.signInBtn}
                    onPress={onPressLogin}
                >{t('login.sign-in')}</Button>
            </View>
            <View style={styles.footer}>
                <Button mode="outlined" onPress={onPressRegistration}>
                    {t('login.sign-up')}
                </Button>
                <Button mode="text" onPress={onPressResetPassword}>
                    {t('login.forgotPassword')}
                </Button>
            </View>
        </ScrollView>
    )
};

export default LoginScreenView