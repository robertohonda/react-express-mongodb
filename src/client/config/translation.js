import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import EnglishMessages from '../translations/en'

addLocaleData([...locale_en]);

export const messages = {
  'en': EnglishMessages
};

export const language = navigator.language.split(/[-_]/)[0];