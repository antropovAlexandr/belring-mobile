import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { AsyncStorage } from 'react-native';

import en from './en.json';
import ru from './ru.json';

const APP_LANGUAGE = 'appLanguage';

export const LANG_TYPES = {
  EN: 'eng',
  RU: 'rus',
};

// const fallbackLanguage = { languageTag: LANG_TYPES.EN, isRTL: false };

// const defaultLanguage = { languageTag: getDefaultLanguage(), isRTL: false };
// const defaultLanguage =
//     RNLocalize.findBestAvailableLanguage([LANG_TYPES.EN, LANG_TYPES.RU]) || fallbackLanguage;

// console.log('defaultLanguage', defaultLanguage);

export const getLanguage = () => i18n.language;

export const setLanguage = language => {
  console.log('setLanguage');
  i18n.changeLanguage(language);
  // AsyncStorage.setItem(APP_LANGUAGE, language);
};

// const initializeAppLanguage = async () => {
//     const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);
//     const defaultLanguage = (currentLanguage) ? currentLanguage : LANG_TYPES.EN;
// };

// const STORAGE_KEY = '@APP:languageCode';
// const languageDetector = {
//     type: 'languageDetector',
//     async: true, // flags below detection to be async
//     init: async () => {
//         console.log('i18n INIT method inside local languageDetector');
//         const savedData = await AsyncStorage.getItem(APP_LANGUAGE);
//         console.log('i18n init - savedData:', savedData);
//     },
//     detect: async (callback) => {
//         const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);
//         const defaultLanguage = currentLanguage || LANG_TYPES.EN;
//         console.log('detect - defaultLanguage:', defaultLanguage);
//         callback(defaultLanguage);
//     },
//     cacheUserLanguage: (lng) => {
//         console.log('cashe lng', lng)
//         AsyncStorage.setItem(APP_LANGUAGE, lng);
//     }
// };
//

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async callback => {
    const savedDataJSON = await AsyncStorage.getItem(APP_LANGUAGE);
    const lng = savedDataJSON ? JSON.parse(savedDataJSON) : null;
    const selectLanguage = lng || LANG_TYPES.EN;
    console.log('detect - selectLanguage:', selectLanguage);
    callback(selectLanguage);
  },
  cacheUserLanguage: lang => {
    console.log('cacheUserLanguage:', lang);
    AsyncStorage.setItem(APP_LANGUAGE, lang);
  },
};

i18n

  .use(initReactI18next)
  .use(languageDetector)
  .init({
    lng: LANG_TYPES.RU,
    fallbackLng: LANG_TYPES.EN,
    resources: {
      [LANG_TYPES.EN]: { translation: en },
      [LANG_TYPES.RU]: { translation: ru },
    },
    debug: false,
    react: {
      wait: true,
    },
  });

export default i18n;
