import { getCharacteres, getCharacteresCounter } from './services/characteres/index.js';
import { getEpisodes, getEpisodesCounter } from './services/episodes/index.js';
import { getIdFromUrl, getLocationName, getResultsWithTimeExecution } from './services/helpers.js';
import { getLocationsCounter } from './services/location/index.js';

const getCounters = async () => {
  const counters = async () =>
    await Promise.all([getLocationsCounter(), getEpisodesCounter(), getCharacteresCounter()]);

  return await getResultsWithTimeExecution(counters).then((results) => ({
    exercise_name: 'Char counter',
    ...results,
  }));
};

const getLocationsOfEpisodes = async () => {
  const locationsByEpisodes = async () =>
    await Promise.all([getEpisodes(), getCharacteres()]).then((results) => {
      const episodes = results[0];
      const characters = results[1];

      return episodes.map((episode) => {
        const locations = episode.characters.map((url) => getLocationName(characters, getIdFromUrl(url)));
        const locationWithoutDuplicity = [...new Set(locations)];

        return {
          name: episode.name,
          episode: episode.episode,
          locations: locationWithoutDuplicity,
        };
      });
    });

  return await getResultsWithTimeExecution(locationsByEpisodes).then((results) => ({
    exercise_name: 'Episode locations',
    ...results,
  }));
};

export const runChallenge = async (showInConsole = true) => {
  const results = await Promise.all([getCounters(), getLocationsOfEpisodes()]);
  showInConsole && console.log(results);
  return results;
};
