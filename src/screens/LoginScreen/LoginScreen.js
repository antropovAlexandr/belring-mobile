import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form} from 'react-final-form'
import {useTranslation} from "react-i18next";
import {UserActions} from '../../redux/reducers/userReducer'
import LoginScreenView from "./LoginScreenView";
import ErrorModal from "../../components/ErrorModal";
import {checkEmailIsValid, checkPasswordIsValid} from "../../helper/validation";
import {userErrorSelector} from "../../selectors/userSelector";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {REGISTRATION_SCREEN} from "../../consts/screenNames";

const logoImg = require('assets/images/logo/logo.png');

const LoginScreen = () => {
    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);
    const {t} = useTranslation();
    const onPressRegistration = useCallback(() => {
        dispatch(NavigationActions.navigate({routeName: REGISTRATION_SCREEN}))
    })

    const onPressResetPassword = useCallback(() => {
        dispatch(NavigationActions.navigate({routeName: REGISTRATION_SCREEN}))
    })

    const modalAction = useCallback(() => {
        dispatch(UserActions.clearUserError())
    })

    const validation = useCallback((values) => {
        const errors = {};
        if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email');
        if (!checkPasswordIsValid(values.password)) errors.password = t('validationError.password');
        return errors
    }, []);

    const onSubmit = useCallback(values => dispatch(UserActions.loginRequest(values.email, values.password)), [])

    return (
        <>
            <Form
                onSubmit={onSubmit}
                validate={validation}
                render={({handleSubmit}) => (
                  <LoginScreenView
                    logoImg={logoImg}
                    onPressLogin={handleSubmit}
                    onPressRegistration={onPressRegistration}
                    onPressResetPassword={onPressResetPassword}
                  />
                )}
            />
            <ErrorModal error={error} action={modalAction} />
        </>
    );
};

export default LoginScreen
