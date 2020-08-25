import React, {useCallback} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { LANG_TYPES, setLanguage } from '../../../i18n';
import { INTRODUCTION_SCREEN } from '../../constants';
import { styles } from './styles';

const LanguageSelect = ({ navigation }) => {
  const { t } = useTranslation();

  const onChangeLanguage = useCallback(language => {
    navigation.navigate(INTRODUCTION_SCREEN);
    setLanguage(language);
  }, [setLanguage]);

  return (
    <View style={styles.buttonsContainer}>
      <Button
        mode="outlined"
        style={styles.buttonStyle}
        onPress={() => onChangeLanguage(LANG_TYPES.RU)}
      >
        {t('languageSelect.russian')}
      </Button>
      <Button
        mode="outlined"
        style={styles.buttonStyle}
        onPress={() => onChangeLanguage(LANG_TYPES.EN)}
      >
        {t('languageSelect.english')}
      </Button>
    </View>
  );
};

export default LanguageSelect;
