import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Form} from 'react-final-form'
import {useTranslation} from "react-i18next";
import LoginView from "./LoginView";
import {checkEmailIsValid, checkPasswordIsValid} from "../../helper/validation";
import {REGISTRATION_SCREEN, PASSWORD_RECOVERY} from "../constants";
import {loginUserRequest} from "./reducer";

const logoImg = require('assets/images/logo/logo.png');

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const onPressRegistration = useCallback(() => {
        navigation.navigate(REGISTRATION_SCREEN);
    }, []);

    const onPressResetPassword = useCallback(() => {
        navigation.navigate(PASSWORD_RECOVERY);
    }, []);

    const validation = useCallback((values) => {
        const errors = {};
        if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email');
        if (!checkPasswordIsValid(values.password)) errors.password = t('validationError.password');
        return errors
    }, []);

    const onSubmit = useCallback(({email, password}) => dispatch(loginUserRequest({ email, password })), []);

    return (
        <Form
            onSubmit={onSubmit}
            validate={validation}
            render={({handleSubmit}) => (
                <LoginView logoImg={logoImg} onPressLogin={handleSubmit} onPressRegistration={onPressRegistration} onPressResetPassword={onPressResetPassword}/>)}
        />
    );
};

export default Login
