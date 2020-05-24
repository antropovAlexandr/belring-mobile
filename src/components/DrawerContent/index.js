import React, { useMemo, useCallback } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {Image, TouchableOpacity, View} from 'react-native';
import { Caption, Divider, Drawer, Title } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {getUserRoleNameByType} from "../../screens/Login/utils";
import {blue} from "../../consts/colors";

import styles from './styles';
import {ABOUT_APP_SCREEN, OBSERVATIONS_SCREEN, PLACES, SETTINGS_SCREEN} from "../../screens/constants";
import {logoutUserRequest} from "../../screens/Login/reducer";
import {userFirstNameSelector, userLastNameSelector, userRoleSelector} from "../../screens/Login/selector";

const logoImg = require('assets/images/logo/logo.png');
const ICON_SIZE = 26;

export function DrawerContent({ progress, navigation }) {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 0.5, 0.7, 0.8, 1],
        outputRange: [-100, -85, -70, -45, 0],
    });

    const firstName = useSelector(userFirstNameSelector);
    const lastName = useSelector(userLastNameSelector);
    const role = useSelector(userRoleSelector);

    const userRoleName = useMemo(() => getUserRoleNameByType(role), [role]);
    const hideDrawer = useCallback(() => navigation.toggleDrawer(), []);
    const handleNavigateToObservations = useCallback(() => navigation.navigate(OBSERVATIONS_SCREEN), [navigation]);
    const handleNavigateToPlaces = useCallback(() => navigation.navigate(PLACES), [navigation]);
    const handleNavigateToSetting = useCallback(() => navigation.navigate(SETTINGS_SCREEN), [navigation]);
    const handleNavigateToAboutApp = useCallback(() => navigation.navigate(ABOUT_APP_SCREEN), [navigation]);
    const handleLogout = useCallback(() => dispatch(logoutUserRequest()), [dispatch]);

    return (
        <DrawerContentScrollView>
            <Animated.View
                style={[ styles.drawerContent, { transform: [{ translateX }]}]}
            >
                <View style={styles.userInfoSection}>
                    <TouchableOpacity onPress={hideDrawer}>
                        <Image style={{ width: 150 }} resizeMode="contain" source={logoImg}/>
                    </TouchableOpacity>
                    <Title style={styles.title}>{firstName} {lastName}</Title>
                    <Caption style={styles.caption}>{t(userRoleName)}</Caption>
                </View>
                <Divider />
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={() => <Icon name="binoculars" color={blue} size={ICON_SIZE} />}
                        label={t('topLevelMenu.observation')}
                        labelStyle={styles.drawerItem}
                        onPress={handleNavigateToObservations}
                    />
                    <DrawerItem
                        icon={() => <Icon name="file-document-edit-outline" color={blue} size={ICON_SIZE} />}
                        label={t('topLevelMenu.draft')}
                        labelStyle={styles.drawerItem}
                        onPress={() => {}}
                    />
                    <DrawerItem
                        icon={() => <Icon name="cards-heart" color={blue} size={ICON_SIZE} />}
                        label={t('topLevelMenu.place')}
                        labelStyle={styles.drawerItem}
                        onPress={handleNavigateToPlaces}
                    />
                    <DrawerItem
                        icon={() => <Icon name="cogs" color={blue} size={ICON_SIZE} />}
                        label={t('topLevelMenu.settings')}
                        labelStyle={styles.drawerItem}
                        onPress={handleNavigateToSetting}
                    />
                    <DrawerItem
                        icon={() => <Icon name="alert-circle" color={blue} size={ICON_SIZE} />}
                        label={t('topLevelMenu.aboutApp')}
                        labelStyle={styles.drawerItem}
                        onPress={handleNavigateToAboutApp}
                    />
                    <DrawerItem
                        icon={() => <Icon name="exit-to-app" color={blue} size={ICON_SIZE} />}
                        label={t('topLevelMenu.exit')}
                        labelStyle={styles.drawerItem}
                        onPress={handleLogout}
                    />
                </Drawer.Section>
            </Animated.View>
        </DrawerContentScrollView>
    );
}