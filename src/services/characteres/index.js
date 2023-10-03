import { counterCharFromNames, getAllPagesOfApi } from '../helpers.js';

export const getCharacteres = () => getAllPagesOfApi('https://rickandmortyapi.com/api/character');

export const getCharacteresCounter = async () => await counterCharFromNames('character', 'c');
