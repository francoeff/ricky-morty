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
