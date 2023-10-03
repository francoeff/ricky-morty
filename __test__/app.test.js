import { runChallenge } from '../src/app';

describe('Result of Challenge', () => {
  test('should run two exercises', async () => {
    const result = await runChallenge(false);
    const firstExercise = result[0];
    const secondExercise = result[1];

    expect(firstExercise.results).toEqual([
      { char: 'l', count: 82, resource: 'location' },
      { char: 'e', count: 88, resource: 'episode' },
      { char: 'c', count: 494, resource: 'character' },
    ]);

    expect(firstExercise.in_time).toBe(true);

    expect(secondExercise.results[0]).toEqual({
      name: 'Pilot',
      episode: 'S01E01',
      locations: [
        'Citadel of Ricks',
        'Bepis 9',
        'Earth (C-137)',
        'unknown',
        'Interdimensional Customs',
        'Earth (Replacement Dimension)',
        "Worldender's lair",
      ],
    });

    expect(secondExercise.results[1]).toEqual({
      name: 'Lawnmower Dog',
      episode: 'S01E02',
      locations: [
        'Citadel of Ricks',
        'Earth (C-137)',
        'unknown',
        "Mr. Goldenfold's dream",
        "Snuffles' Dream",
        'Earth (Replacement Dimension)',
      ],
    });

    expect(secondExercise.in_time).toBe(true);
  });
});
