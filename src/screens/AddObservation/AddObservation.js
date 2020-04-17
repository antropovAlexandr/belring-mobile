import React from 'react'
import {View} from "react-native";
import {useTranslation} from "react-i18next";
import arrayMutators from 'final-form-arrays';
import {FIELD_NAME} from "./constants";
import Wizard from "../../components/Wizard";

import TagInformationStep from "./ObservationSteps/TagInformationStep";
import BirdInformationStep from "./ObservationSteps/BirdInformationStep";
import FooterNav from "./FooterNav";
import {birdInformationValidation, obstaclesInformationValidation, tagInformationValidation} from "./validation";
import ObstaclesInformationStep from "./ObservationSteps/ObstaclesInformationStep";

const {PHOTOS, RINGS} = FIELD_NAME;

const AddObservation = () => {
    const {t} = useTranslation();

    const onSubmit = values => {
        console.log('onSubmit values', values)
    };

    return (
        <View style={{ flex: 1,}}>
            <Wizard
                formProps={{
                    mutators: { ...arrayMutators },
                    initialValues: {
                        [PHOTOS]: [undefined],
                        [RINGS]: [undefined]
                    },
                }}
                onSubmit={onSubmit}
                submitText="Activate"
                renderFooter={(handleSubmit, handlePrevious) => <FooterNav onPressPrevious={handlePrevious} onPressNext={handleSubmit}/>}
            >
                <TagInformationStep validate={tagInformationValidation} />
                <BirdInformationStep validate={birdInformationValidation} />
                <ObstaclesInformationStep validate={obstaclesInformationValidation} />
            </Wizard>
        </View>
    );
};

export default AddObservation
