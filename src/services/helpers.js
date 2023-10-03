import axios from 'axios';

export const getAllPagesOfApi = async (urlApi) => {
  const response = await axios.get(`${urlApi}?page=1`);
  const {
    info: { pages },
    results,
  } = response.data;

  const restOfFetches = [...Array(pages - 1)].map((_, index) => axios.get(`${urlApi}?page=${index + 2}`));

  const responses = await Promise.all(restOfFetches);
  const restOfResults = responses.map((response) => response.data.results);
  return [...results, ...restOfResults.flat()];
};

const getNamesFromEndpoint = async (endpoint) => {
  const results = await getAllPagesOfApi(`https://rickandmortyapi.com/api/${endpoint}`);
  return results.map((result) => result.name);
};

const countCharacters = (char, text) => {
  const regChar = new RegExp(char, 'i');
  return text.split(regChar).length;
};

export const counterCharFromNames = async (resource, char) => {
  try {
    const names = await getNamesFromEndpoint(resource);
    const namesString = names.join('');

    const count = countCharacters(char, namesString);

    return { char, count, resource };
  } catch (error) {
    throw Error(error);
  }
};

export const getResultsWithTimeExecution = async (callback) => {
  const startTime = process.hrtime();
  const results = await callback();
  const endTime = process.hrtime(startTime);
  const time = endTime[0] + 's ' + endTime[1] / 1000000 + 'ms';

  return {
    time,
    in_time: endTime[0] < 3,
    results,
  };
};

export const getIdFromUrl = (url) => parseInt(url.split('/').slice(-1)[0]);
export const getLocationName = (arrayToSearch, id) => arrayToSearch.find((element) => element.id === id).location.name;
