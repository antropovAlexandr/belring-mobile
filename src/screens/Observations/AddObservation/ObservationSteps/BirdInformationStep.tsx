import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Text, View, Linking } from 'react-native'
import { Trans, useTranslation } from 'react-i18next'

import FormFieldWithDropdown from '../../../../components/FormFieldWithDropdown'
import { formatLabelByValue } from '../../../../helper/formatter'
import { observationsInitialDataSelector } from '../../selector'
import { FIELD_NAME } from '../constants'
import styles from '../styles'

const { TYPE_OF_BIRD, BIRD_SEX, BIRD_AGE, BIRD_WAS, BIRD_STATUS } = FIELD_NAME

const BIRD_APP_URL = 'market://details?id=com.apbbirdsguide.app'

const BirdInformationStep = ({ form }) => {
  const { t } = useTranslation()
  const { sex, age, conditions, status, species } = useSelector(observationsInitialDataSelector)

  const handlePressLink = useCallback(async () => {
    const supported = await Linking.canOpenURL(BIRD_APP_URL)
    if (supported) await Linking.openURL(BIRD_APP_URL)
  }, [])

  const selectItemFormatter = useCallback(
    (value, valueField, labelField, array) => formatLabelByValue(value, valueField, labelField, array),
    []
  )

  return (
    <>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.description}>
            <Trans defaults='addEditObservation.stepTitle' values={{ firstStep: '2', countStep: '3' }} />
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{t('addEditObservation.birdHeader')}</Text>
            <Text style={styles.description}>{t('addEditObservation.birdDescription')}</Text>
          </View>
          <FormFieldWithDropdown
            name={TYPE_OF_BIRD}
            setFormValue={form.mutators.setFormValue}
            items={species}
            valueField='id'
            labelField='desc'
            format={(value) => selectItemFormatter(value, 'id', 'desc', species)}
            label={t('addEditObservation.typeOfBird')}
          />
          <Text style={styles.description}>
            <Trans
              defaults='addEditObservation.typeOfBirdDescription'
              values={{ mobileApp: t('addEditObservation.typeOfBirdDescriptionMobileApp') }}
              components={[<Text key='mobile-app-text' style={styles.mobileAppText} onPress={handlePressLink} />]}
            />
          </Text>
          <FormFieldWithDropdown
            name={BIRD_SEX}
            setFormValue={form.mutators.setFormValue}
            items={sex}
            valueField='id'
            labelField='desc'
            format={(value) => selectItemFormatter(value, 'id', 'desc', sex)}
            label={t('addEditObservation.birdSex')}
          />
          <FormFieldWithDropdown
            name={BIRD_AGE}
            setFormValue={form.mutators.setFormValue}
            items={age}
            valueField='id'
            labelField='desc'
            format={(value) => selectItemFormatter(value, 'id', 'desc', age)}
            label={t('addEditObservation.birdAge')}
          />
          <FormFieldWithDropdown
            name={BIRD_WAS}
            setFormValue={form.mutators.setFormValue}
            items={conditions}
            valueField='id'
            labelField='desc'
            format={(value) => selectItemFormatter(value, 'id', 'desc', conditions)}
            label={t('addEditObservation.birdWas')}
          />
          <FormFieldWithDropdown
            name={BIRD_STATUS}
            setFormValue={form.mutators.setFormValue}
            items={status}
            valueField='id'
            labelField='desc'
            format={(value) => selectItemFormatter(value, 'id', 'desc', status)}
            label={t('addEditObservation.birdStatus')}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default BirdInformationStep
