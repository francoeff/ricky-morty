import axios from 'axios';
import { getAllPagesOfApi } from '../src/services/helpers.js';

jest.mock('axios');

describe('getAllPagesOfApi', () => {
  test('should fetch all results from a paginated endpoint', async () => {
    const mockResponse1 = {
      data: {
        info: { pages: 3 },
        results: [1, 2, 3],
      },
    };
    const mockResponse2 = {
      data: {
        results: [4, 5, 6],
      },
    };
    const mockResponse3 = {
      data: {
        results: [7, 8, 9],
      },
    };

    axios.get
      .mockResolvedValueOnce(mockResponse1)
      .mockResolvedValueOnce(mockResponse2)
      .mockResolvedValueOnce(mockResponse3);

    const result = await getAllPagesOfApi('https://rickandmortyapi.com/api/character');
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=1');
    expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=2');
    expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=3');
  });

  test('should fetch all results from a paginated endpoint with only one page', async () => {
    const mockResponse1 = {
      data: {
        info: { pages: 1 },
        results: [1, 2, 3],
      },
    };

    axios.get.mockResolvedValueOnce(mockResponse1);

    const result = await getAllPagesOfApi('https://rickandmortyapi.com/api/character');
    expect(result).toEqual([1, 2, 3]);
    expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=1');
  });

  test('should fetch all results from a paginated endpoint with no results', async () => {
    const mockResponse1 = {
      data: {
        info: { pages: 1 },
        results: [],
      },
    };

    axios.get.mockResolvedValueOnce(mockResponse1);

    const result = await getAllPagesOfApi('https://rickandmortyapi.com/api/character');
    expect(result).toEqual([]);
    expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=1');
  });
});
