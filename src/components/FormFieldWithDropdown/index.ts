import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { HelperText, TouchableRipple, Menu, TextInput } from 'react-native-paper'
import { Field } from 'react-final-form'

const FormFieldWithDropdown = ({
  name,
  format,
  items,
  valueField = 'value',
  labelField = 'label',
  setFormValue,
  style,
  ...inputProps
}) => {
  const { t } = useTranslation()
  const [isShowMenu, setShowMenu] = useState(false)

  const showMenu = useCallback(() => setShowMenu(true), [])

  const hideMenu = useCallback(() => setShowMenu(false), [])

  return (
    <Menu
      visible={isShowMenu}
      onDismiss={hideMenu}
      style={{ width: '90%' }}
      anchor={
        <Field
          {...{ name }}
          {...{ format }}
          render={({ input, meta }) => {
            const isError = !!meta.error && meta.touched
            return (
              <View style={style}>
                <TouchableRipple onPress={showMenu}>
                  <TextInput
                    {...input}
                    {...inputProps}
                    editable={false}
                    style={{ backgroundColor: 'transparent' }}
                    error={isError}
                  />
                </TouchableRipple>
                <HelperText type='error' visible={isError}>
                  {t(meta.error)}
                </HelperText>
              </View>
            )
          }}
        />
      }
    >
      {items.map((item) => {
        const { id, onPress, ...otherProps } = item
        return (
          <Menu.Item
            {...otherProps}
            key={id || item[labelField]}
            onPress={() => {
              onPress ? onPress() : setFormValue(name, item[valueField])
              hideMenu()
            }}
            title={item[labelField]}
          />
        )
      })}
    </Menu>
  )
}

export default FormFieldWithDropdown
