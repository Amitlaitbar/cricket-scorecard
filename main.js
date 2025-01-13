import { ballByBall } from "./data/match_1.js";
import { generateScoreCard } from './src/scorecard.js';

const main = () => {
  console.log(generateScoreCard(ballByBall));
};

main();
