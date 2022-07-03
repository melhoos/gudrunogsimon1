import { no } from './no';

export enum Language {
  NO = 'no',
}

export type DictionaryType = keyof typeof no;

export const dictionaryList = { no: no };
