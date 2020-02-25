import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en.json';
import ru from './ru.json';

export const LANG_TYPES = {
    EN: 'en',
    RU: 'ru',
};

const fallbackLanguage = { languageTag: LANG_TYPES.EN, isRTL: false };
const defaultLanguage =
    RNLocalize.findBestAvailableLanguage([LANG_TYPES.EN, LANG_TYPES.RU]) || fallbackLanguage;

i18n.use(initReactI18next).init({
    lng: defaultLanguage.languageTag,
    resources: {
        [LANG_TYPES.EN]: { translation: en },
        [LANG_TYPES.RU]: { translation: ru },
    },
    debug: false,
});

export default i18n;