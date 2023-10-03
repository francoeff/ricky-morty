import { getAllPagesOfApi } from './services/helpers.js';

getAllPagesOfApi('https://rickandmortyapi.com/api/location').then((results) => {
  console.log(results);
});
getAllPagesOfApi('https://rickandmortyapi.com/api/episode').then((results) => {
  console.log(results);
});
getAllPagesOfApi('https://rickandmortyapi.com/api/character').then((results) => {
  console.log(results);
});
