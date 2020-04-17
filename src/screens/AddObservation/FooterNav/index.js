import React from 'react'
import {Text, View} from "react-native";
import {Button} from "react-native-paper";
import {useTranslation} from "react-i18next";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";


export default ({onPressPrevious, onPressNext}) => {
    const {t} = useTranslation();
    return (
        <View style={styles.container}>
            <Button mode="text" onPress={onPressPrevious} style={styles.btnContainer} labelStyle={styles.btnLabel}>
                <Icon name="chevron-left" size={22} />
                <Text>{t('addEditObservation.back')}</Text>
            </Button>
            <Button mode="text" onPress={onPressNext} style={styles.btnContainer} labelStyle={styles.btnLabel}>
                <Text>{t('addEditObservation.next')}</Text>
                <Icon name="chevron-right" size={22} />
            </Button>
        </View>
    );
};
