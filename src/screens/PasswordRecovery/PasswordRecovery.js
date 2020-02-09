import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form} from 'react-final-form'
import {useTranslation} from "react-i18next";
import {UserActions} from '../../redux/reducers/userReducer'
import ErrorModal from "../../components/ErrorModal";
import {checkEmailIsValid} from "../../helper/validation";
import {userErrorSelector} from "../../selectors/userSelector";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import PasswordRecoveryView from "./PasswordRecoveryView";

const PasswordRecovery = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => userErrorSelector(state));
    const {t} = useTranslation();

    const validation = (values) => {
        const errors = {};
        if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email');
        return errors
    };

    return (
        <>
            <Form
                onSubmit={values => dispatch(UserActions.resetPasswordRequest(values.email))}
                validate={validation}
                render={({handleSubmit}) => (
                    <PasswordRecoveryView
                        onPressResetPassword={handleSubmit}
                        onPressBack={() => dispatch(NavigationActions.goBack())}
                    />
                )}
            />
            <ErrorModal error={error} action={() => dispatch(UserActions.clearUserError())}/>
        </>
    );
};

export default PasswordRecovery
