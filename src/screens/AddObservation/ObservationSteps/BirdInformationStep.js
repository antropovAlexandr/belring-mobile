import React, {useCallback} from 'react'
import {useSelector} from "react-redux";
import {ScrollView, Text, View, Linking} from "react-native";
import {Trans, useTranslation} from "react-i18next";
import styles from "../styles";
import {initialDataSelector} from "../../../selectors/initialDataSelector";
import {FIELD_NAME} from "../constants";
import FormFieldWithDropdown from "../../../components/FormFieldWithDropdown";

const {TYPE_OF_BIRD, BIRD_SEX, BIRD_AGE, BIRD_WAS, BIRD_STATUS} = FIELD_NAME;

const BIRD_APP_URL = "market://details?id=com.apbbirdsguide.app";

const BirdInformationStep = ({ form }) => {
    const {t} = useTranslation();
    const { otherMarksInformation } = useSelector(initialDataSelector);

    const handlePressLink = useCallback(async () => {
        const supported = await Linking.canOpenURL(BIRD_APP_URL);
        if (supported) await Linking.openURL(BIRD_APP_URL);
    }, []);


    return (
        <>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.description}>
                        <Trans
                            defaults="addEditObservation.stepTitle"
                            values={{ firstStep: '2', countStep: '3'}}
                        />
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>{t('addEditObservation.birdHeader')}</Text>
                        <Text style={styles.description}>{t('addEditObservation.birdDescription')}</Text>
                    </View>
                    <FormFieldWithDropdown
                        name={TYPE_OF_BIRD}
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.typeOfBird')}
                    />
                    <Text style={styles.description}>
                        <Trans
                            defaults="addEditObservation.typeOfBirdDescription"
                            values={{ mobileApp: t('addEditObservation.typeOfBirdDescriptionMobileApp')}}
                            components={[
                                <Text style={styles.mobileAppText} onPress={handlePressLink} />]}
                        />
                    </Text>
                    <FormFieldWithDropdown
                        name={BIRD_SEX}
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.birdSex')}
                    />
                    <FormFieldWithDropdown
                        name={BIRD_AGE}
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.birdAge')}
                    />
                    <FormFieldWithDropdown
                        name={BIRD_WAS}
                        setFormValue={form.mutators.setFormValue}
                        items={[
                            {
                                label: '1', desc_eng: '1',
                            }, {label: '2', desc_eng: '2',}
                        ]}
                        valueField="desc_eng"
                        label={t('addEditObservation.birdWas')}
                    />
                    <FormFieldWithDropdown
                        name={BIRD_STATUS}
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
        </>
    );
};

export default BirdInformationStep;

