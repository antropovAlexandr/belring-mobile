import React from 'react'
import {ScrollView, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Button} from "react-native-paper";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {ADD_OBSERVATION} from "../constants";
import {FIELD_NAME} from "../AddObservation/constants";

import styles from "./styles";

const {TYPE_OF_BIRD, BIRD_SEX, BIRD_AGE, BIRD_WAS, BIRD_STATUS, LOCATION_CONDITION, PLACE, COORDINATE_ACCURACY} = FIELD_NAME;

const ObservationCreated = ({ navigation }) => {
    const values = navigation.getParam('values', {});
    const dispatch = useDispatch();
    const {t} = useTranslation();

    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.titleBlock}>
                    <Text style={styles.title}>{t('observationCreated.observationCreatedTitle')}</Text>
                    <Text style={styles.description}>{t('observationCreated.observationCreatedDescription')}</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button
                    mode="outlined"
                    onPress={() => dispatch(NavigationActions.navigate({routeName: ADD_OBSERVATION, params: {
                            initialValues: {
                                [TYPE_OF_BIRD]: values[TYPE_OF_BIRD],
                                [BIRD_SEX]: values[BIRD_SEX],
                                [BIRD_AGE]: values[BIRD_AGE],
                                [BIRD_WAS]: values[BIRD_WAS],
                                [BIRD_STATUS]: values[BIRD_STATUS],
                            }}}))}
                    style={styles.button}
                >
                    {t('observationCreated.createOneMoreBird')}
                </Button>
                <Button
                    mode="outlined"
                    onPress={() => dispatch(NavigationActions.navigate({routeName: ADD_OBSERVATION, params: {
                            initialValues: {
                                [LOCATION_CONDITION]: values[LOCATION_CONDITION],
                                [PLACE]: values[PLACE],
                                [COORDINATE_ACCURACY]: values[COORDINATE_ACCURACY],
                            }}}))}
                    style={styles.button}
                >
                    {t('observationCreated.createOneInLocation')}
                </Button>
            </View>
        </ScrollView>
    );
};

export default ObservationCreated
