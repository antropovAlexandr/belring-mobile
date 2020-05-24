import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TextInput, Button} from "react-native-paper";
import {useTranslation} from "react-i18next";
import FormFieldWithTextInput from "../../../components/FormFieldWithTextInput";
import styles from './styles';

const PasswordRecoveryView = ({emailDefault, onPressBack, onPressResetPassword}) => {
    const {t} = useTranslation();

    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.main}>
                <Text style={styles.headerText}>{t('passwordRecovery.recovery')}</Text>
                <Text style={styles.hintText}>{t('passwordRecovery.instructionText')}</Text>
                <FormFieldWithTextInput
                    name="email"
                    component={TextInput}
                    label={t('passwordRecovery.email')}
                    mode="outlined"
                />
                <Button
                    mode="contained"
                    onPress={onPressResetPassword}
                >
                    {t('passwordRecovery.sendNewPassword')}
                </Button>
            </View>
            <View style={styles.footer}>
                <Button
                    mode="text"
                    onPress={onPressBack}
                >
                    {t('passwordRecovery.back')}
                </Button>
            </View>
        </ScrollView>
    );
};

export default PasswordRecoveryView;
