import { getCharacteresCounter } from './services/characteres/index.js';
import { getEpisodesCounter } from './services/episodes/index.js';
import { getResultsWithTimeExecution } from './services/helpers.js';
import { getLocationsCounter } from './services/location/index.js';

const getCounters = async () => {
  const counters = async () =>
    await Promise.all([getLocationsCounter(), getEpisodesCounter(), getCharacteresCounter()]);

  return await getResultsWithTimeExecution(counters).then((results) => ({
    exercise_name: 'Char counter',
    ...results,
  }));
};

getCounters().then((results) => {
  console.log(results);
});
