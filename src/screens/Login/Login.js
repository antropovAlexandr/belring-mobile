import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { images } from 'Consts';
import LoginView from './LoginView';
import { checkEmailIsValid, checkPasswordIsValid } from '../../helper/validation';
import { REGISTRATION_SCREEN, PASSWORD_RECOVERY, ABOUT_APP_SCREEN } from '../constants';
import { loginUserRequest } from './reducer';
import { EMAIL_INPUT_NAME, PASSWORD_INPUT_NAME } from './constants';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onPressRegistration = useCallback(() => {
    navigation.navigate(REGISTRATION_SCREEN);
  }, []);

  const onPressResetPassword = useCallback(() => {
    navigation.navigate(PASSWORD_RECOVERY);
  }, []);

  const navigateToAboutApp = useCallback(() => {
    navigation.navigate(ABOUT_APP_SCREEN);
  }, []);

  const validation = useCallback(values => {
    const errors = {};
    if (!checkEmailIsValid(values[EMAIL_INPUT_NAME]))
      errors[EMAIL_INPUT_NAME] = t('validationError.email');
    if (!checkPasswordIsValid(values[PASSWORD_INPUT_NAME]))
      errors[PASSWORD_INPUT_NAME] = t('validationError.password');
    return errors;
  }, []);

  const onSubmit = useCallback(
    values =>
      dispatch(
        loginUserRequest({ email: values[EMAIL_INPUT_NAME], password: values[PASSWORD_INPUT_NAME] })
      ),
    []
  );

  return (
    <Form
      onSubmit={onSubmit}
      validate={validation}
      render={({ handleSubmit }) => (
        <LoginView
          logoImg={images.logoImg}
          onPressLogin={handleSubmit}
          onPressRegistration={onPressRegistration}
          onPressResetPassword={onPressResetPassword}
          navigateToAboutApp={navigateToAboutApp}
        />
      )}
    />
  );
};

export default Login;
