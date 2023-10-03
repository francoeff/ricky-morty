import { counterCharFromNames, getAllPagesOfApi } from '../helpers.js';

export const getEpisodes = () => getAllPagesOfApi('https://rickandmortyapi.com/api/episode');

export const getEpisodesCounter = async () => await counterCharFromNames('episode', 'e');
