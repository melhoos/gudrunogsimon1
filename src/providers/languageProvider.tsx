import { useState } from 'react';
import { Language } from '../assets/language';
import { LanguageContext } from '../contexts/languageContext';

export const LanguageProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const selectedLanguage = localStorage.getItem('selectedLanguage');

  const [language, setLanguage] = useState<Language>(
    (selectedLanguage as Language) ?? Language.NO
  );

  const handleSetLanguage = (newLanguage: Language) => {
    localStorage.setItem('selectedLanguage', newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
