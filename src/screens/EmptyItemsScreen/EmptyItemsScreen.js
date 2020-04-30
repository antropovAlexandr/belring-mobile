import React, {useState} from "react";
import {Image, Text, View} from "react-native";
import {FAB} from 'react-native-paper';
import {useTranslation} from "react-i18next";
import {ADD_OBSERVATION} from "../constants";
import styles from "./styles";

const arrow = require("../../assets/images/arrow.png");

const EmptyItemsScreen = ({ route, navigation }) => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const { title, description } = route.params;

    const actions = [
        {icon: 'map-marker', label: t("places.addNewPlace"), onPress: () => console.log('Добавить место')},
        {
            icon: 'binoculars',
            label: t("addEditObservation.navHeaderTitleAdd"),
            onPress: () => navigation.navigate(ADD_OBSERVATION)
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
