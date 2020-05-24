import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import {useTranslation} from "react-i18next";
import {Button} from "react-native-paper";
import { version } from "../../../package.json"

import styles from './styles';


const logo = require('../../assets/images/logo/logo.png');
const epamLogo = require('../../assets/images/logo/epam-logo.png');


const AboutApp = () => {
  const {t} = useTranslation();

  const phone = '+375 (29) 285-31-13';
  const email = 'sfsdfsdf@sdfsdf.bt';

  return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.margin}>
          <View style={styles.logo}>
            <Image resizeMode="contain" style={styles.image} source={logo} />
            <Text style={styles.version}>{`${t('aboutApp.version')} ${version}`}</Text>
          </View>
          <Text style={styles.text}>{t('aboutApp.description')}</Text>
          <Button
              mode="outlined"
              onPress={() => {}}
              style={styles.buttonWrapper}
          >
            {t('aboutApp.readMore')}
          </Button>
          <View style={styles.article}>
            <Text style={styles.title}>{t('aboutApp.aboutCenter')}</Text>
            <Text style={styles.text}>{t('aboutApp.aboutCenterDescription')}</Text>
          </View>
        </View>
        <View style={styles.contactDetails}>
          <Text style={styles.contactDetailsTitle}>{t('aboutApp.contactDetails')}</Text>
          <View style={styles.contactDetailsItem}>
            <Text style={styles.contactDetailsLabel}>{t('aboutApp.phone')}</Text>
            <Text style={styles.contactDetailsInput}>{phone}</Text>
          </View>
          <View style={styles.contactDetailsItem}>
            <Text style={styles.contactDetailsLabel}>{t('aboutApp.email')}</Text>
            <Text style={styles.contactDetailsInput}>{email}</Text>
          </View>
        </View>
        <View style={styles.developApp}>
          <View style={styles.article}>
            <Text style={styles.title}>{t('aboutApp.developmentTitle')}</Text>
            <Text style={styles.text}>{t('aboutApp.developmentDescription')}</Text>
          </View>
          <Image resizeMode="contain" style={styles.epamLogo} source={epamLogo} />
        </View>
      </ScrollView>
  );
};

export default AboutApp;
