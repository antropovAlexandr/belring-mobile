import React, { useMemo, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import arrayMutators from 'final-form-arrays';
import {FIELD_NAME} from "./constants";
import Wizard from "../../components/Wizard";

import TagInformationStep from "./ObservationSteps/TagInformationStep";
import BirdInformationStep from "./ObservationSteps/BirdInformationStep";
import FooterNav from "./FooterNav";
import {birdInformationValidation, obstaclesInformationValidation, tagInformationValidation} from "./validation";
import ObstaclesInformationStep from "./ObservationSteps/ObstaclesInformationStep";
import {ObservationActions} from "../../redux/reducers/observationReducer";
import ErrorModal from "../../components/ErrorModal";
import {observationErrorSelector} from "../../selectors/observationSelector";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {OBSERVATION_CREATED} from "../constants";

const {PHOTOS, RINGS, DATE} = FIELD_NAME;

const AddObservation = ({ navigation }) => {
    const initialValuesFromNavigation = navigation.getParam('initialValues', {});
    const dispatch = useDispatch();
    const error = useSelector(observationErrorSelector);
    const {t} = useTranslation();

    const initialValues = useMemo(() => ({
        ...initialValuesFromNavigation,
        [PHOTOS]: [undefined],
        [RINGS]: [undefined]
    }), [initialValuesFromNavigation]);

    const onSubmit = (values, { reset })=> {
        const successAction = () => {
            reset();
            dispatch(NavigationActions.navigate({routeName: OBSERVATION_CREATED, params: { values }}));
        };
        dispatch(ObservationActions.addObservationRequest(values, successAction));
    };

    return (
        <>
            <Wizard
                formProps={{
                    mutators: {
                        ...arrayMutators,
                        setFormValue: ([fieldName, value], state, { changeValue }) => {
                            changeValue(state, fieldName, () => value)
                        },
                    },
                    initialValues,
                    keepDirtyOnReinitialize: false,
                }}
                onSubmit={onSubmit}
                renderFooter={(handleSubmit, handlePrevious, isLastPage, isFirstPage) => (
                    <FooterNav onPressPrevious={handlePrevious} onPressNext={handleSubmit} isLastPage={isLastPage} isFirstPage={isFirstPage}/>
                )}
            >
                <TagInformationStep validate={tagInformationValidation} />
                <BirdInformationStep validate={birdInformationValidation} />
                <ObstaclesInformationStep validate={obstaclesInformationValidation} />
            </Wizard>
            <ErrorModal error={error} />
        </>
    );
};

export default AddObservation
