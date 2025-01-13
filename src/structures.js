export const createDefaultOverview = () => ({
  Team: '',
  Total: 0,
  Wickets: 0
});

export const createDefaultBatsman = () => ({
  Batter: '',
  Dismissal: 'not out',
  Runs: 0,
  Balls: 0,
  '4s': 0,
  '6s': 0
});

export const createDefaultBowler = () => ({
  Bowler: '',
  O: 0.0,
  R: 0,
  W: 0
});

export const createDefaultExtras = () => ({
  Noballs: 0,
  Wides: 0,
  Legbyes: 0,
  Byes: 0
});