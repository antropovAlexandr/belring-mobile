import React from 'react'
import { TextInput, HelperText } from 'react-native-paper'
import { Field } from 'react-final-form'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'

const FormFieldWithTextInput = ({ name, format, style, inputStyle, showIcon, Icon, ...inputProps }) => {
  const { t } = useTranslation()

  return (
    <Field
      {...{ name }}
      {...{ format }}
      render={({ input, meta }) => {
        const isError = !!meta.error && meta.touched
        return (
          <View style={style}>
            <TextInput {...input} {...inputProps} style={inputStyle} error={isError} />
            <HelperText type='error' visible={isError}>
              {t(meta.error)}
            </HelperText>
            {showIcon && <Icon {...inputProps} />}
          </View>
        )
      }}
    />
  )
}

export default FormFieldWithTextInput
