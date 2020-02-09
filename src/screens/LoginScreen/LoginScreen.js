import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form} from 'react-final-form'
import {useTranslation} from "react-i18next";
import {UserActions} from '../../redux/reducers/userReducer'
import LoginScreenView from "./LoginScreenView";
import ErrorModal from "../../components/ErrorModal";
import {checkEmailIsValid, checkPasswordIsValid} from "../../helper/validation";
import {userErrorSelector} from "../../selectors/userSelector";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {PASSWORD_RECOVERY, REGISTRATION_SCREEN} from "../../consts/screenNames";

const logoImg = require('assets/images/logo/logo.png');

const LoginScreen = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => userErrorSelector(state));
    const {t} = useTranslation();

    const validation = (values) => {
        const errors = {};
        if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email');
        if (!checkPasswordIsValid(values.password)) errors.password = t('validationError.password');
        return errors
    };

    return (
        <>
            <Form
                onSubmit={values => dispatch(UserActions.loginRequest(values.email, values.password))}
                validate={validation}
                render={({handleSubmit}) => (
                    <LoginScreenView
                        logoImg={logoImg}
                        onPressLogin={handleSubmit}
                        onPressRegistration={() => dispatch(NavigationActions.navigate({routeName: REGISTRATION_SCREEN}))}
                        onPressResetPassword={() => dispatch(NavigationActions.navigate({routeName: PASSWORD_RECOVERY}))}
                    />
                )}
            />
            <ErrorModal error={error} action={() => dispatch(UserActions.clearUserError())} />
        </>
    );
};

export default LoginScreen
