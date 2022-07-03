import React, { useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { LanguageContext } from '../../contexts/languageContext';
import { Language } from '../../assets/language';

export default function LanguageSelector() {
  const { language, handleSetLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: Language | null
  ) => {
    if (newLanguage !== null) {
      handleSetLanguage(newLanguage);
    }
  };

  return (
    <div className="language-selector">
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleLanguageChange}
        aria-label="language selector"
        className="language-toggle-group"
      >
        {(Object.keys(Language) as Array<keyof typeof Language>).map(
          (key, index) => (
            <ToggleButton
              value={Language[key]}
              key={index}
              aria-label={`language ${key}`}
            >
              {key}
            </ToggleButton>
          )
        )}
      </ToggleButtonGroup>
    </div>
  );
}
