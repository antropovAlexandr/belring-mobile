import React, { useMemo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import arrayMutators from 'final-form-arrays'

import Wizard from '../../../components/Wizard'
import { OBSERVATION_CREATED } from '../../constants'
import { addObservationRequest, loadInitialDataRequest } from '../reducer'
import { getLanguage } from '../../../i18n'

import TagInformationStep from './ObservationSteps/TagInformationStep'
import BirdInformationStep from './ObservationSteps/BirdInformationStep'
import ObstaclesInformationStep from './ObservationSteps/ObstaclesInformationStep'
import FooterNav from './FooterNav'
import { birdInformationValidation, obstaclesInformationValidation, tagInformationValidation } from './validation'
import { createObservationAdapter } from './utils'
import { FIELD_NAME } from './constants'

const { PHOTOS, RINGS } = FIELD_NAME

const AddObservation = ({ route, navigation }) => {
  const { params = {} } = route
  const { initialValues = {} } = params
  const lang = getLanguage()
  const dispatch = useDispatch()

  const initialValuesForm = useMemo(
    () => ({
      ...initialValues,
      [PHOTOS]: [undefined],
      [RINGS]: [undefined],
    }),
    [initialValues]
  )

  useEffect(() => {
    dispatch(loadInitialDataRequest(lang))
  }, [lang])

  const onSubmit = (values, { reset }) => {
    const successAction = () => {
      reset()
      navigation.navigate(OBSERVATION_CREATED, { values })
    }
    const observation = createObservationAdapter(values)
    dispatch(addObservationRequest(observation, successAction))
  }

  return (
    <Wizard
      formProps={{
        mutators: {
          ...arrayMutators,
          setFormValue: ([fieldName, value], state, { changeValue }) => {
            changeValue(state, fieldName, () => value)
          },
        },
        initialValues: initialValuesForm,
        keepDirtyOnReinitialize: false,
      }}
      onSubmit={onSubmit}
      renderFooter={(handleSubmit, handlePrevious, isLastPage, isFirstPage) => (
        <FooterNav
          onPressPrevious={handlePrevious}
          onPressNext={handleSubmit}
          isLastPage={isLastPage}
          isFirstPage={isFirstPage}
        />
      )}
    >
      <TagInformationStep validate={tagInformationValidation} />
      <BirdInformationStep validate={birdInformationValidation} />
      <ObstaclesInformationStep validate={obstaclesInformationValidation} navigation={navigation} />
    </Wizard>
  )
}

export default AddObservation
