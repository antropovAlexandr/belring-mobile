import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-final-form'
import { useTranslation } from "react-i18next";
import { UserActions } from '../../redux/reducers/userReducer'
import RegistrationScreenView from "./RegistrationScreenView";
import ErrorModal from "../../components/ErrorModal";
import { checkEmailIsValid, checkPasswordIsValid } from "../../helper/validation";
import { userErrorSelector } from "../../selectors/userSelector";
import { NavigationActions } from "../../redux/reducers/navigatorReducer";

const RegistrationScreen = () => {
    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);
    const { t } = useTranslation();

    const validation = (values) => {
        const errors = {};
        if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email');
        if (!checkPasswordIsValid(values.password)) errors.password = t('validationError.password');
        if (!values.firstName) errors.firstName = t('validationError.firstName');
        if (!values.lastName) errors.lastName = t('validationError.lastName');
        if (!values.phone) errors.phone = t('validationError.phone');
        return errors
    };

    return (
        <>
            <Form
                onSubmit={values => dispatch(UserActions.registrationRequest(
                    values.email, values.password, values.firstName, values.lastName, values.phone
                ))}
                validate={validation}
                render={({ handleSubmit }) => <RegistrationScreenView
                    onPressRegistration={handleSubmit}
                    onPressBack={() => dispatch(NavigationActions.goBack())}
                />}
            />
            <ErrorModal error={error} action={() => dispatch(UserActions.clearUserError())} />
        </>
    );
};

export default RegistrationScreen
