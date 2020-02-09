import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en.json';
import ru from './ru.json';

const fallbackLanguage = { languageTag: 'en', isRTL: false };
const defaultLanguage =
    RNLocalize.findBestAvailableLanguage(['en', 'ru']) || fallbackLanguage;

i18n.use(initReactI18next).init({
    lng: defaultLanguage.languageTag,
    resources: {
        en: { translation: en },
        ru: { translation: ru },
    },
    debug: false,
});

export default i18n;