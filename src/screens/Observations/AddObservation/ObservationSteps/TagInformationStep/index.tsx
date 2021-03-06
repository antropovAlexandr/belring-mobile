import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import { Trans, useTranslation } from 'react-i18next'
import { FieldArray } from 'react-final-form-arrays'
import { Field as FinalField } from 'react-final-form'
import { Button } from 'react-native-paper'

import FormFieldWithTextInput from '../../../../../components/FormFieldWithTextInput'
import FormFieldWithDropdown from '../../../../../components/FormFieldWithDropdown'
import { formatLabelByValue } from '../../../../../helper/formatter'
import { observationsInitialDataSelector } from '../../../selector'
import styles from '../../styles'
import { FIELD_NAME } from '../../constants'

import PreviewPhoto from './PreviewPhoto'
import UploadPhoto from './UploadPhoto'

const { PHOTOS, PHOTO, RINGS, TAG_NUMBER, TAG_TYPE } = FIELD_NAME

const renderDeleteButton = (index, onRemoveUser, translate) => {
  if (index === 0) return null
  return (
    <Button mode='text' onPress={() => onRemoveUser(index)} style={styles.deleteBtn}>
      {translate('addEditObservation.delete')}
    </Button>
  )
}

const TagInformationStep = ({ values, setShowFooter, form }) => {
  const [isShowPreview, setIsShowPreview] = useState(false)
  const { t } = useTranslation()
  const { otherMarksInformation = [] } = useSelector(observationsInitialDataSelector)

  const selectItemFormatter = useCallback(
    (value, valueField, labelField, array) => formatLabelByValue(value, valueField, labelField, array),
    []
  )

  const onPressShowPreview = useCallback(() => setIsShowPreview(true), [])
  const onPressClosePreview = useCallback(() => setIsShowPreview(false), [])

  return (
    <>
      {isShowPreview ? (
        <PreviewPhoto images={values[PHOTOS]} onPressClose={onPressClosePreview} setShowFooter={setShowFooter} />
      ) : (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.description}>
              <Trans defaults='addEditObservation.stepTitle' values={{ firstStep: '1', countStep: '3' }} />
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.titleBlock}>
              <Text style={styles.title}>{t('addEditObservation.tag')}</Text>
              <Text style={styles.description}>{t('addEditObservation.addInfoAboutTag')}</Text>
            </View>
            <FieldArray name={RINGS}>
              {({ fields }) => {
                const addNewRings = () => fields.push(undefined)
                const onRemoveUser = (index: number) => fields.remove(index)
                return (
                  <>
                    {fields.map((name, index) => (
                      <View key={name}>
                        <FormFieldWithTextInput
                          name={`${name}.${TAG_NUMBER}`}
                          label={t('addEditObservation.ringNumber')}
                          mode='flat'
                        />
                        <FormFieldWithDropdown
                          name={`${name}.${TAG_TYPE}`}
                          setFormValue={form.mutators.setFormValue}
                          items={otherMarksInformation}
                          valueField='id'
                          labelField='desc'
                          format={(value) => selectItemFormatter(value, 'id', 'desc', otherMarksInformation)}
                          label={t('addEditObservation.ringType')}
                        />
                        {renderDeleteButton(index, onRemoveUser, t)}
                      </View>
                    ))}
                    <Button mode='outlined' onPress={addNewRings} style={styles.oneMoreRingBtn}>
                      {t('addEditObservation.oneMoreRing')}
                    </Button>
                  </>
                )
              }}
            </FieldArray>

            <View style={styles.titleBlock}>
              <Text style={styles.title}>{t('addEditObservation.photo')}</Text>
              <Text style={styles.description}>{t('addEditObservation.addInfoAboutPhoto')}</Text>
            </View>
            <ScrollView horizontal>
              <FieldArray name={PHOTOS}>
                {({ fields }) =>
                  fields.map((name, index) => (
                    <FinalField
                      key={name}
                      component={UploadPhoto}
                      name={`${name}.${PHOTO}`}
                      fields={fields}
                      index={index}
                      onPressPreview={onPressShowPreview}
                    />
                  ))
                }
              </FieldArray>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </>
  )
}

export default TagInformationStep
