import React, {useCallback} from 'react'
import {useSelector} from "react-redux";
import {ScrollView, Text, View} from "react-native";
import {useTranslation} from "react-i18next";
import { TextInput, Button, List } from 'react-native-paper';
import FormFieldWithTextInput from "../../../components/FormFieldWithTextInput";
import { Dropdown } from 'react-native-material-dropdown';
import styles from "../styles";
import {black087, black06} from '../../../consts/colors'
import {initialDataSelector} from "../../../selectors/initialDataSelector";


const TagInformationStep = () => {
    const {t} = useTranslation();
    const { otherMarksInformation } = useSelector(initialDataSelector)
    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Шаг 1 из 3</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.titleBlock}>
                    <Text style={styles.title}>{t('addEditObservation.tag')}</Text>
                    <Text style={styles.description}>{t('addEditObservation.addInfoAboutTag')}</Text>
                </View>
                <FormFieldWithTextInput
                    name="tagNumber"
                    component={TextInput}
                    label={t('addEditObservation.ringNumber')}
                    mode="flat"
                />
                <Dropdown
                    label={t('addEditObservation.ringType')}
                    containerStyle={styles.dropdown}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    baseColor={black06}
                    data={otherMarksInformation}
                    valueExtractor={({ desc_eng }) => desc_eng}
                />
                <Button mode="outlined" onPress={() => {}}>
                    {t('addEditObservation.oneMoreRing')}
                </Button>
            </View>
        </ScrollView>
    );
};

export default TagInformationStep;

