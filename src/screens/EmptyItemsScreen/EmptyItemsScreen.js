import React, {useState} from "react";
import {Image, Text, View} from "react-native";
import {FAB} from 'react-native-paper';
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {NavigationActions} from "../../redux/reducers/navigatorReducer";
import {ADD_OBSERVATION} from "../constants";
import styles from "./styles";

const arrow = require("../../assets/images/arrow.png");

const EmptyItemsScreen = ({ navigation }) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const title = navigation.getParam('title', 'places.titleEmpty');
    const description = navigation.getParam('description', 'places.descriptionEmpty');

    const actions = [
        {icon: 'map-marker', label: t("places.addNewPlace"), onPress: () => console.log('Добавить место')},
        {
            icon: 'binoculars',
            label: t("addEditObservation.navHeaderTitleAdd"),
            onPress: () => dispatch(NavigationActions.navigate({routeName: ADD_OBSERVATION}))
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{t(title)}</Text>
                <Text style={styles.description}>{t(description)}</Text>
            </View>
            <View style={styles.footer}>
                <Image style={styles.image} source={arrow}/>
            </View>
            <FAB.Group
                visible
                open={isOpen}
                icon={isOpen ? 'pencil-outline' : 'plus'}
                actions={actions}
                onStateChange={({open}) => setIsOpen(open)}
            />
        </View>
    );
};

export default EmptyItemsScreen;
