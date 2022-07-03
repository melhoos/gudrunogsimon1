import { createContext } from 'react';
import { Language } from '../assets/language';

type LanguageContextType = {
  language: Language;
  handleSetLanguage: (newLanguage: Language) => void;
};

const defaultLanguageContext = {
  language: Language.NO,
  handleSetLanguage: () => {
    return;
  },
};

export const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext
);
