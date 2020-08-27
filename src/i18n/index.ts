import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import AsyncStorage from '@react-native-community/async-storage'

import en from './en.json'
import ru from './ru.json'

const APP_LANGUAGE = 'appLanguage'

export const LANG_TYPES = {
  EN: 'eng',
  RU: 'rus',
}

export const getLanguage = () => i18n.language

export const setLanguage = (language) => {
  i18n.changeLanguage(language)
}

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const savedDataJSON = await AsyncStorage.getItem(APP_LANGUAGE)
    const lng = savedDataJSON ? JSON.parse(savedDataJSON) : null
    const selectLanguage = lng || LANG_TYPES.EN
    callback(selectLanguage)
  },
  cacheUserLanguage: (lang) => {
    AsyncStorage.setItem(APP_LANGUAGE, lang)
  },
}

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
    debug: __DEV__,
    react: {
      wait: true,
    },
  })

export default i18n
