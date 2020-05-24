import React, {useState, useCallback, useMemo} from 'react'
import {useSelector} from "react-redux";
import {ScrollView, Text, View } from "react-native";
import {TouchableRipple, Portal, TextInput} from 'react-native-paper';
import {Trans, useTranslation} from "react-i18next";
import DateTimePicker from '@react-native-community/datetimepicker';
import FormFieldWithDropdown from "../../../../components/FormFieldWithDropdown";
import FormFieldWithTextInput from "../../../../components/FormFieldWithTextInput";
import {formatCoordinateToString, formatDateToString, formatLabelByValue} from "../../../../helper/formatter";
import {getLocationItems} from "../../../Places/AddPlace/utils";
import {observationsInitialDataSelector} from "../../selector";
import {placesSelector} from "../../../Places/selector";
import {MAP_SCREEN} from "../../../constants";
import {FIELD_NAME} from "../constants";
import styles from "../styles";


const {LOCATION_CONDITION, PLACE, COORDINATE_ACCURACY, DATE, DATE_ACCURACY} = FIELD_NAME;

let selectedDate = null;
const currentDate = new Date();

const convertUserPlaceToLocationItems = (userPlaces, setFormValue) => {
    if (!userPlaces || !userPlaces.length) return [];
    return userPlaces.map(({latitude, longitude, id, customName}) => {
        const coordinate = {latitude, longitude};
        return ({
            id,
            label: customName,
            value: coordinate,
            icon: "map-marker",
            onPress: () => setFormValue(PLACE, coordinate)
        });
    });
};


const ObstaclesInformationStep = ({ form, navigation, values }) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const {t} = useTranslation();
    const { circumstances, accuracyOfCoordinates, accuracyOfDate } = useSelector(observationsInitialDataSelector);
    const userPlaces = useSelector(placesSelector);

    const selectItemFormatter = useCallback((value, valueField, labelField, array) => formatLabelByValue(value, valueField, labelField, array), []);

    const onChangeDate = useCallback((event, date) => {
        selectedDate = date || selectedDate;
        setShowDatePicker(false);
        form.mutators.setFormValue(DATE, selectedDate)
    }, []);

    const dateFormatter = useCallback(value => value ? formatDateToString(value) : null, []);

    const locationItems = useMemo(() => ([
        ...getLocationItems(
        t,
        (coords) => form.mutators.setFormValue(PLACE, coords),
        () => navigation.navigate(MAP_SCREEN, {
            setCoordinateToForm: (coords) =>  form.mutators.setFormValue(PLACE, coords),
            initialCoordinate: values[PLACE],
            screenName: t('addEditObservation.newObservationTitle')
        })),
        ...convertUserPlaceToLocationItems(userPlaces, form.mutators.setFormValue),
    ]), [t, form, navigation, values, userPlaces]);
    const locationFormatter = useCallback(value => value ? formatCoordinateToString(value): null, []);

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
                        items={circumstances}
                        valueField="id"
                        labelField="desc"
                        format={(value) => selectItemFormatter(value, 'id', 'desc', circumstances)}
                        label={t('addEditObservation.locationСondition')}
                    />
                    <FormFieldWithDropdown
                        name={PLACE}
                        setFormValue={form.mutators.setFormValue}
                        items={locationItems}
                        valueField="value"
                        format={locationFormatter}
                        label={t('addEditObservation.place')}
                    />
                    <FormFieldWithDropdown
                        name={COORDINATE_ACCURACY}
                        setFormValue={form.mutators.setFormValue}
                        items={accuracyOfCoordinates}
                        valueField="id"
                        labelField="desc"
                        format={(value) => selectItemFormatter(value, 'id', 'desc', accuracyOfCoordinates)}
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
                        items={accuracyOfDate}
                        valueField="id"
                        labelField="desc"
                        format={(value) => selectItemFormatter(value, 'id', 'desc', accuracyOfDate)}
                        label={t('addEditObservation.dateAccuracy')}
                    />
                </View>
            </ScrollView>
            { showDatePicker && <DateTimePicker
                mode="date"
                value={currentDate}
                maximumDate={currentDate}
                display="default"
                onChange={onChangeDate}
            />}
        </>
    );
};

export default ObstaclesInformationStep;

