import React, {Fragment, RefObject} from 'react';
import Swiper from 'react-native-swiper';
import {useTranslation} from "react-i18next";
import SlideView from './SlideView';
import {styles} from './styles';

const historyScreen = require('../../../assets/images/introduction/history_screen.png');
const informationScreen = require('../../../assets/images/introduction/information_screen.png');
const reasonScreen = require('../../../assets/images/introduction/reason_screen.png');
const tagsScreen = require('../../../assets/images/introduction/tags_screen.png');

const Slides = ({sliderRef, onSliderChanged}) => {
    const {t} = useTranslation();
    const slides = [
        {
            id: 'Slides/historyScreen',
            image: historyScreen,
            title: t('introduction.historyScreenTitle'),
            description: t('introduction.historyScreenText'),
        },
        {
            id: 'Slides/informationScreen',
            image: informationScreen,
            title: t('introduction.informationScreenTitle'),
            description: t('introduction.informationScreenText'),
        },
        {
            id: 'Slides/reasonScreen',
            image: reasonScreen,
            title: t('introduction.reasonScreenTitle'),
            description: t('introduction.reasonScreenText'),
        },
        {
            id: 'Slides/tagsScreen',
            image: tagsScreen,
            title: t('introduction.tagsScreenTitle'),
            description: t('introduction.tagsScreenText'),
        },
    ];

    return (
        <Swiper
            ref={sliderRef}
            showsButtons={false}
            loop={false}
            paginationStyle={styles.pagination}
            dotStyle={styles.dot}
            activeDotStyle={[styles.dot, styles.backgroundActive]}
            onIndexChanged={onSliderChanged}
        >
            {slides.map(slide => (
                <Fragment key={slide.id}>
                    <SlideView image={slide.image} title={slide.title} description={slide.description}/>
                </Fragment>
            ))}
        </Swiper>
    );
};

export default Slides;
