import React, { useState, useCallback } from 'react'
import {useSelector} from "react-redux";
import {ScrollView, Text, View } from "react-native";
import {TouchableRipple, Portal, TextInput} from 'react-native-paper';
import {Trans, useTranslation} from "react-i18next";
import DateTimePicker from '@react-native-community/datetimepicker';
import {initialDataSelector} from "../../../selectors/initialDataSelector";
import FormFieldWithDropdown from "../../../components/FormFieldWithDropdown";

import {FIELD_NAME} from "../constants";
import styles from "../styles";
import FormFieldWithTextInput from "../../../components/FormFieldWithTextInput";
import {formatDateToString} from "../../../helper/formatter";

const {LOCATION_CONDITION, PLACE, COORDINATE_ACCURACY, DATE, DATE_ACCURACY} = FIELD_NAME;

let selectedDate = null;

const ObstaclesInformationStep = ({ form }) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const {t} = useTranslation();
    const { otherMarksInformation } = useSelector(initialDataSelector);

    const onChangeDate = useCallback((event, date) => {
        selectedDate = date || selectedDate;
        setShowDatePicker(false);
        form.mutators.setFormValue(DATE, selectedDate)
    }, []);

    const dateFormatter = useCallback(value => value ? formatDateToString(value) : null, []);

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
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.locationСondition')}
                    />
                    <FormFieldWithDropdown
                        name={PLACE}
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.place')}
                    />
                    <FormFieldWithDropdown
                        name={COORDINATE_ACCURACY}
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.coordinateAccuracy')}
                    />

                    <TouchableRipple onPress={() => setShowDatePicker(true)}>
                        <FormFieldWithTextInput
                            name={DATE}
                            label={t('addEditObservation.date')}
                            editable={false}
                            format={dateFormatter}
                            inputStyle={{ backgroundColor: 'transparent' }}
                        />
                    </TouchableRipple>

                    <FormFieldWithDropdown
                        name={DATE_ACCURACY}
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.birdStatus')}
                    />
                </View>
            </ScrollView>
            { showDatePicker && <DateTimePicker
                mode="date"
                value={new Date()}
                display="default"
                onChange={onChangeDate}
            />}
        </>
    );
};

export default ObstaclesInformationStep;

