import React from 'react';
import { TextInput, HelperText } from "react-native-paper";
import { Field } from 'react-final-form';
import { View } from "react-native";

const FormFieldWithTextInput = ({ name, style, ...inputProps }) => {
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
                            error={isError} />
                        <HelperText
                            type="error"
                            visible={isError}
                        >
                            {meta.error}
                        </HelperText>
                    </View>
                );
            }}
        />
    );
};

export default FormFieldWithTextInput;
