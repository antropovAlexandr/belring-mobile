import React, { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { useTranslation } from 'react-i18next'

import FormFieldWithDropdown from '../../../components/FormFieldWithDropdown'
import FormFieldWithTextInput from '../../../components/FormFieldWithTextInput'
import { MAP_SCREEN } from '../../constants'
import { formatCoordinateToString } from '../../../helper/formatter'

import { FIELD_NAME } from './constants'
import styles from './styles'
import { getLocationItems } from './utils'

const { LOCATION_COORDINATE, LOCATION_NAME } = FIELD_NAME

const AddPlaceView = ({ form, onPressNewLocation, navigation, values, isSave }) => {
  const { t } = useTranslation()
  const locationItems = useMemo(
    () =>
      getLocationItems(
        t,
        (coords) => form.mutators.setFormValue(LOCATION_COORDINATE, coords),
        () =>
          navigation.navigate(MAP_SCREEN, {
            setCoordinateToForm: (coords) => form.mutators.setFormValue(LOCATION_COORDINATE, coords),
            initialCoordinate: values[LOCATION_COORDINATE],
            screenName: t('places.screenTitle'),
          })
      ),
    [t, form, navigation, values]
  )
  const locationFormatter = useCallback((value) => (value ? formatCoordinateToString(value) : null), [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FormFieldWithDropdown
          name={LOCATION_COORDINATE}
          items={locationItems}
          valueField='value'
          format={locationFormatter}
          label={t('places.location')}
        />
        <FormFieldWithTextInput name={LOCATION_NAME} label={t('places.name')} />
      </View>
      <View style={styles.footer}>
        <Button
          mode='contained'
          icon={isSave ? 'content-save' : 'plus'}
          onPress={onPressNewLocation}
          style={styles.buttonStyle}
        >
          {isSave ? t('places.savePlace') : t('places.addNewPlace')}
        </Button>
      </View>
    </View>
  )
}

export default AddPlaceView
