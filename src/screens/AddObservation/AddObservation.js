import React, { useMemo } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import arrayMutators from 'final-form-arrays';
import Wizard from "../../components/Wizard";
import TagInformationStep from "./ObservationSteps/TagInformationStep";
import BirdInformationStep from "./ObservationSteps/BirdInformationStep";
import ObstaclesInformationStep from "./ObservationSteps/ObstaclesInformationStep";
import ErrorModal from "../../components/ErrorModal";
import FooterNav from "./FooterNav";
import {birdInformationValidation, obstaclesInformationValidation, tagInformationValidation} from "./validation";
import {ObservationActions} from "../../redux/reducers/observationReducer";
import {observationErrorSelector} from "../../selectors/observationSelector";
import {FIELD_NAME} from "./constants";
import {OBSERVATION_CREATED} from "../constants";

const {PHOTOS, RINGS} = FIELD_NAME;

const AddObservation = ({ route, navigation }) => {
    const { params = {} } = route;
    const { initialValues = {} } = params;
    const dispatch = useDispatch();
    const error = useSelector(observationErrorSelector);
    const {t} = useTranslation();

    const initialValuesForm = useMemo(() => ({
        ...initialValues,
        [PHOTOS]: [undefined],
        [RINGS]: [undefined]
    }), [initialValues]);

    const onSubmit = (values, { reset })=> {
        const successAction = () => {
            reset();
            navigation.navigate(OBSERVATION_CREATED, { values });
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
                    initialValues: initialValuesForm,
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
