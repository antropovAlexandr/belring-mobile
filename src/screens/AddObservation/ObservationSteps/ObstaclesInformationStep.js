import React from 'react'
import {useSelector} from "react-redux";
import {ScrollView, Text, View} from "react-native";
import {Trans, useTranslation} from "react-i18next";
import {initialDataSelector} from "../../../selectors/initialDataSelector";
import FormFieldWithDropdown from "../../../components/FormFieldWithDropdown";
import {FIELD_NAME} from "../constants";
import styles from "../styles";

const {LOCATION_CONDITION, PLACE, COORDINATE_ACCURACY, DATE, DATE_ACCURACY} = FIELD_NAME;


const ObstaclesInformationStep = () => {
    const {t} = useTranslation();
    const { otherMarksInformation } = useSelector(initialDataSelector);

    return (
        <>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.description}>
                        <Trans
                            defaults="addEditObservation.stepTitle"
                            values={{ firstStep: '3', countStep: '3'}}
                        />
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>{t('addEditObservation.obstaclesHeader')}</Text>
                        <Text style={styles.description}>{t('addEditObservation.obstaclesDescription')}</Text>
                    </View>
                    <FormFieldWithDropdown
                        name={LOCATION_CONDITION}
                        data={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueExtractor={({desc_eng}) => desc_eng}
                        label={t('addEditObservation.locationСondition')}
                    />
                    <FormFieldWithDropdown
                        name={PLACE}
                        data={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueExtractor={({desc_eng}) => desc_eng}
                        label={t('addEditObservation.place')}
                    />
                    <FormFieldWithDropdown
                        name={COORDINATE_ACCURACY}
                        data={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueExtractor={({desc_eng}) => desc_eng}
                        label={t('addEditObservation.coordinateAccuracy')}
                    />
                    <FormFieldWithDropdown
                        name={DATE}
                        data={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueExtractor={({desc_eng}) => desc_eng}
                        label={t('addEditObservation.date')}
                    />
                    <FormFieldWithDropdown
                        name={DATE_ACCURACY}
                        data={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueExtractor={({desc_eng}) => desc_eng}
                        label={t('addEditObservation.birdStatus')}
                    />
                </View>
            </ScrollView>
        </>
    );
};

export default ObstaclesInformationStep;

