import React, {useState, useRef, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import Slides from './Slides';
import {UserActions} from "../../redux/reducers/userReducer";
import { LOGIN_SCREEN } from "../constants";
import {styles, hitSlop} from './styles';

const MAX_COUNT_SLIDER_ITEMS = 4;

const Introduction = ({ navigation }) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderRef = useRef(null);

    const goNextSlide = () => {
        if (sliderRef && sliderRef.current) sliderRef.current.scrollBy(1);
    };
    const navigateToLoginScreen = () => {
        dispatch(UserActions.setIsFirstEntry());
        // navigation.navigate(LOGIN_SCREEN);
    };

    const onSliderChanged = (index) => setSliderIndex(index);
    const onPressClose = useCallback(() => { navigateToLoginScreen() });
    const onPressNext = useCallback(() => {
        if (sliderIndex >= MAX_COUNT_SLIDER_ITEMS - 1) {
            navigateToLoginScreen()
        } else goNextSlide();
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeBtnContainer} hitSlop={hitSlop} onPress={onPressClose}>
                <Icon name="md-close" style={styles.closeIcon}/>
            </TouchableOpacity>
            <Slides sliderRef={sliderRef} onSliderChanged={onSliderChanged}/>
            <View style={styles.footer}>
                <Button onPress={onPressNext} appearance="Dark">{t('introduction.next')}</Button>
            </View>
        </View>
    );
};

export default Introduction;
