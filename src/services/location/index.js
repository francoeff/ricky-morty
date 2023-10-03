import { counterCharFromNames, getAllPagesOfApi } from '../helpers.js';

export const getLocations = () => getAllPagesOfApi('https://rickandmortyapi.com/api/location');

export const getLocationsCounter = async () => await counterCharFromNames('location', 'l');
