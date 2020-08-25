import React, { useState, useCallback } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

import FormFieldWithTextInput from 'Components/FormFieldWithTextInput';
import PasswordIcon from './PasswordIcon';
import { EMAIL_INPUT_NAME, PASSWORD_INPUT_NAME } from './constants';
import styles from './styles';

const LoginView = ({
  logoImg,
  onPressLogin,
  onPressRegistration,
  onPressResetPassword,
  navigateToAboutApp,
}) => {
  const { t } = useTranslation();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleShowHidePassword = useCallback(() => {
    setSecureTextEntry(!secureTextEntry);
  }, [setSecureTextEntry])

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.loginContainer}>
        <Image style={styles.logoImg} resizeMode="contain" source={logoImg} />
        <Text style={styles.headerText}>{t('login.bandingCenter')}</Text>
        <TouchableOpacity
          style={styles.infoImgContainer}
          onPress={navigateToAboutApp}
          activeOpacity={0.8}
        >
          <Icon name="information-outline" style={styles.infoIcon} />
        </TouchableOpacity>
        <FormFieldWithTextInput
          name={EMAIL_INPUT_NAME}
          component={TextInput}
          label={t('login.email')}
          mode="outlined"
        />
        <FormFieldWithTextInput
          name={PASSWORD_INPUT_NAME}
          component={TextInput}
          label={t('login.password')}
          mode="outlined"
          secureTextEntry={secureTextEntry}
          showIcon={true}
          Icon={PasswordIcon}
          handleShowHidePassword={handleShowHidePassword}
        />
        <Button mode="contained" style={styles.signInBtn} onPress={onPressLogin}>
          {t('login.sign-in')}
        </Button>
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
  );
};

export default LoginView;
