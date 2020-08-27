import React, { ReactNode, FunctionComponent } from 'react'
import { TextInput, HelperText } from 'react-native-paper'
import { Field } from 'react-final-form'
import { View, StyleProp, ViewStyle, } from 'react-native'
import { useTranslation } from 'react-i18next'

type TextInputProps = React.ComponentProps<typeof TextInput>

type FormFieldWithTextInputProps = Partial<TextInputProps> & {
    name: string;
    format?: () => void;
    showIcon?: boolean;
    Icon?: ReactNode;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
};

const FormFieldWithTextInput: FunctionComponent<FormFieldWithTextInputProps> = ({
    name,
    format,
    style,
    inputStyle,
    label,
    mode,
    right,
    secureTextEntry
}) => {
  const { t } = useTranslation()

    const inputProps = {
        label,
        mode,
        right,
        secureTextEntry
    };

  return (
    <Field
      {...{ name, format }}
      render={({ input, meta }) => {
        const isError = !!meta.error && meta.touched
        return (
          <View style={style}>
            <TextInput {...input} {...inputProps} style={inputStyle} error={isError} />
            <HelperText type='error' visible={isError}>
              {t(meta.error)}
            </HelperText>
          </View>
        )
      }}
    />
  )
}

export default FormFieldWithTextInput
