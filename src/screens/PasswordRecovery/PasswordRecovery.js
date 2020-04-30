import React, { useCallback } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form} from 'react-final-form'
import {useTranslation} from "react-i18next";
import {UserActions} from '../../redux/reducers/userReducer'
import ErrorModal from "../../components/ErrorModal";
import {checkEmailIsValid} from "../../helper/validation";
import {userErrorSelector} from "../../selectors/userSelector";
import PasswordRecoveryView from "./PasswordRecoveryView";

const PasswordRecovery = ({ navigation }) => {
    const dispatch = useDispatch();
    const error = useSelector(state => userErrorSelector(state));
    const {t} = useTranslation();

    const validation = (values) => {
        const errors = {};
        if (!checkEmailIsValid(values.email)) errors.email = t('validationError.email');
        return errors
    };

    const handleNavigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <>
            <Form
                onSubmit={values => dispatch(UserActions.resetPasswordRequest(values.email))}
                validate={validation}
                render={({handleSubmit}) => (
                    <PasswordRecoveryView
                        onPressResetPassword={handleSubmit}
                        onPressBack={handleNavigateBack}
                    />
                )}
            />
            <ErrorModal error={error} action={() => dispatch(UserActions.clearUserError())}/>
        </>
    );
};

export default PasswordRecovery
