import { runChallenge } from '../app.js';

export const main = async (req, res) => {
  const results = await runChallenge();
  res.json(results);
};
