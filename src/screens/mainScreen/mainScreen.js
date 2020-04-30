import React, { useEffect, useCallback } from 'react'
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

    const navigateToEmpty = useCallback((params) => navigation.navigate(EMPTY_ITEMS_SCREEN, params), [])

    const handleNavigateNewPlace = useCallback(() => navigateToEmpty({
      title: 'places.titleEmpty',
      description: 'places.descriptionEmpty',
    }), [navigateToEmpty])

    const handleNavigateNewObservation = useCallback(() => navigateToEmpty({
      title: 'addEditObservation.titleEmpty',
      description: 'addEditObservation.descriptionEmpty',
    }), [navigateToEmpty])

    const handleNavigateToSuccessObservations = useCallback(() => navigation.navigate(OBSERVATION_CREATED), [dispatch])

    return (
        <>
            <Text>
                Hi
            </Text>
            <Button
                mode="outlined"
                onPress={handleNavigateNewPlace}
            >New place</Button>

            <Button
                mode="outlined"
                onPress={handleNavigateNewObservation}
            >New observations</Button>
            <Button
                mode="outlined"
                onPress={handleNavigateToSuccessObservations}
            >Success observations</Button>
        </>
    )
};

export default MainScreen
