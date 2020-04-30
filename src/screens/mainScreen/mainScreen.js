import React, {useEffect, useCallback} from 'react'
import {Text} from 'react-native'
import {Button} from "react-native-paper";
import {InitialDataActions} from "../../redux/reducers/initialDataReducer";
import {EMPTY_ITEMS_SCREEN, OBSERVATION_CREATED} from "../constants";
import {useDispatch} from "react-redux";

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(InitialDataActions.initialDataRequest())
    }, []);

    const handleNavigateToEmptyPlace = useCallback(() => navigation.navigate(EMPTY_ITEMS_SCREEN, {
        title: 'places.titleEmpty',
        description: 'places.descriptionEmpty',
    }), [navigation]);
    const handleNavigateToEmptyObservation = useCallback(() => navigation.navigate(EMPTY_ITEMS_SCREEN, {
        title: 'addEditObservation.titleEmpty',
        description: 'addEditObservation.descriptionEmpty',
    }), [navigation]);
    const handleNavigateToObservationCreated = useCallback(() => navigation.navigate(OBSERVATION_CREATED), [navigation]);

    return (
        <>
            <Text>
                Hi
            </Text>
            <Button mode="outlined" onPress={handleNavigateToEmptyPlace}>New place</Button>

            <Button mode="outlined" onPress={handleNavigateToEmptyObservation}>New observations</Button>
            <Button
                mode="outlined"
                onPress={handleNavigateToObservationCreated}
            >Success observations</Button>
        </>
    )
};

export default MainScreen
