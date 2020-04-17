import React from 'react';
import { TextInput, HelperText } from "react-native-paper";
import { Field } from 'react-final-form';
import { View } from "react-native";
import {useTranslation} from "react-i18next";

const FormFieldWithTextInput = ({ name, style, ...inputProps }) => {
    const {t} = useTranslation();
    return (
        <Field
            {...{ name }}
            render={({input, meta}) => {
                const isError = !!meta.error && meta.touched;
                return (
                    <View style={style}>
                        <TextInput
                            {...input}
                            {...inputProps}
                            error={isError}
                        />
                        <HelperText
                            type="error"
                            visible={isError}
                        >
                            {t(meta.error)}
                        </HelperText>
                    </View>
                );
            }}
        />
    );
};

export default FormFieldWithTextInput;
