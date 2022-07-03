import React, { useContext } from 'react';
import { dictionaryList, DictionaryType } from '../../assets/language';
import { LanguageContext } from '../../contexts/languageContext';

interface TextProps {
  value: string;
}

const Text = (props: TextProps): JSX.Element => {
  const { language } = useContext(LanguageContext);

  const getText = (t: DictionaryType) => {
    let dictionary = dictionaryList.no;
    if (language != undefined) {
      dictionary = dictionaryList[language];
    }
    return dictionary[t];
  };
  return <>{getText(props.value as DictionaryType)}</>;
};

export default Text;
