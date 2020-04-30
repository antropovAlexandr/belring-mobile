import React from "react";
import { KeyboardAvoidingView, ScrollView, Text } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { useTranslation } from "react-i18next";
import FormFieldWithTextInput from "../../components/FormFieldWithTextInput";
import styles from "./styles";


const RegistrationScreenView = ({logoImg, onPressRegistration, onPressBack}) => {
    const { t } = useTranslation();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.headerText}>{t('registration.sign-up')}</Text>
                <FormFieldWithTextInput
                    name="email"
                    component={TextInput}
                    label={t('registration.email')}
                    mode="outlined"
                />
                <FormFieldWithTextInput
                    name="password"
                    component={TextInput}
                    label={t('registration.password')}
                    mode="outlined"
                    secureTextEntry
                />
                <Text style={styles.hintText}>{t('registration.communicationDataHint')}</Text>
                <FormFieldWithTextInput
                    name="firstName"
                    component={TextInput}
                    label={t('registration.firstName')}
                    mode="outlined"
                />
                <FormFieldWithTextInput
                    name="lastName"
                    component={TextInput}
                    label={t('registration.lastName')}
                    mode="outlined"
                />
                <FormFieldWithTextInput
                    name="phone"
                    component={TextInput}
                    label={t('registration.phone')}
                    mode="outlined"
                />
                <Button
                    mode="contained"
                    style={styles.footerBtn}
                    onPress={onPressRegistration}
                >{t('registration.register')}</Button>
                <Button mode="text" style={styles.footerBtn} onPress={onPressBack}>
                    {t('registration.back')}
                </Button>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};

export default RegistrationScreenView