import React from 'react'
import {Text} from 'react-native'
import {Button} from "react-native-paper";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {EMPTY_ITEMS_SCREEN} from "../constants";
import {useDispatch} from "react-redux";

const MainScreen = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Text>
                Hi
            </Text>
            <Button
                mode="outlined"
                onPress={() => dispatch(NavigationActions.navigate({routeName: EMPTY_ITEMS_SCREEN, params: {
                        title: 'places.titleEmpty',
                        description: 'places.descriptionEmpty',
                }}))}
            >New place</Button>

            <Button
                mode="outlined"
                onPress={() => dispatch(NavigationActions.navigate({routeName: EMPTY_ITEMS_SCREEN, params: {
                        title: 'addEditObservation.titleEmpty',
                        description: 'addEditObservation.descriptionEmpty',
                    }}))}
            >New observations</Button>
        </>
    )
};

export default MainScreen
