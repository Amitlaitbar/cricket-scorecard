import {
  createDefaultOverview,
  createDefaultBatsman,
  createDefaultBowler,
  createDefaultExtras
} from "./structures.js";

const fetchAllDeliveries = (oversData) =>
  oversData.flatMap(({ deliveries }) => deliveries);

const caught = ({ bowler, wickets: [{ fielders: [{ name }] }] }) =>
  `c ${name} b ${bowler}`;

const stumped = ({ bowler, wickets: [{ fielders: [{ name }] }] }) =>
  `st ${name} b ${bowler}`;

const run_Out = ({ wickets: [{ fielders: [{ name }] }] }) =>
  `run out (${name})`;

const lbw = ({ bowler }) => `lbw ${bowler}`;
const bowled = ({ bowler }) => `b ${bowler}`;

const dismissalOfBatsMan = (data) => {
  const dismissals = { caught, stumped, lbw, bowled };

  if (data.wickets[0].kind === 'run out') return run_Out(data);

  return dismissals[data.wickets[0].kind](data);
};

const getDismissal = (batsmenInfo, delivery) => {
  const dismissal = dismissalOfBatsMan(delivery);
  const out_player = delivery.wickets[0].player_out;

  if (out_player in batsmenInfo) {
    batsmenInfo[out_player].Dismissal = dismissal;
    return batsmenInfo;
  }

  batsmenInfo[out_player] = defaultBatterData;
  batsmenInfo.Dismissal = dismissal;

  return batsmenInfo;
};

const isBoundry = ({ runs }) =>
  runs.batter === 4 && !('non_boundary' in runs);

const isSix = ({ runs }) => runs.batter === 6;

export const isFairDelivery = (delivery) =>
  !('extras' in delivery) ||
  !(('noballs' in delivery.extras) || ('wides' in delivery.extras));

const updateBatsmanStats = (batsMan, { ...batsmenInfo }, delivery) => {
  batsmenInfo[batsMan].Batter = delivery.batter;
  batsmenInfo[batsMan].Runs += delivery.runs.batter;
  batsmenInfo[batsMan].Balls += isFairDelivery(delivery) ? 1 : 0;
  batsmenInfo[batsMan]['4s'] += isBoundry(delivery) ? 1 : 0;
  batsmenInfo[batsMan]['6s'] += isSix(delivery) ? 1 : 0;

  return batsmenInfo;
};

export const updateBattingStats = ({ ...batsMenInfo }, delivery) => {
  const batsMan = delivery.batter;

  if (!(batsMan in batsMenInfo))
    batsMenInfo[batsMan] = createDefaultBatsman();

  const battingStats = updateBatsmanStats(batsMan, batsMenInfo, delivery);

  return 'wickets' in delivery ? getDismissal(batsMenInfo, delivery) : battingStats;
};

const updateOver = (over) => {
  const balls = (Math.floor(over) * 6 + (over * 10) % 10) + 1;
  return Math.floor(balls / 6) + '.' + balls % 6;
};

const getUpdatedOver = (over, delivery) => {
  return isFairDelivery(delivery) ? updateOver(over) : over;
};

const updateWickets = (delivery) =>
  'wickets' in delivery && delivery.wickets[0].kind !== 'run out' ? 1 : 0;

export const updateBowlingStats = ({ ...bowlersInfo }, delivery) => { // write different function for add values
  const name = delivery.bowler;

  if (!(name in bowlersInfo))
    bowlersInfo[name] = createDefaultBowler();

  bowlersInfo[name].Bowler = delivery.bowler;
  bowlersInfo[name].R += delivery.runs.total;
  bowlersInfo[name].O = getUpdatedOver(bowlersInfo[name].O, delivery);
  bowlersInfo[name].W += updateWickets(delivery);

  return bowlersInfo;
};

const formatBattersData = (players, data) => {
  const details = Object.values(data);
  const titles = Object.keys(details[0]);
  const battersData = {};

  for (let index = 0; index < details.length; index += 1) {
    const playerName = players[index];
    battersData[playerName] = data[playerName];
  }

  const battingStats = Object.values(battersData);
  return [titles, battingStats.map((obj) => Object.values(obj)).join('\n')].join('\n');
};

const formatBowlersData = (data) => {
  const details = Object.values(data);
  const titles = Object.keys(details[0]);

  return [titles, details.map((obj) => Object.values(obj)).join('\n')].join('\n');
};

const formatExtrasDetails = (data) => {
  const titles = Object.keys(data);
  const details = Object.values(data);

  return [titles, details].join('\n');
};

const countExtra = (extraType, { extras }) =>
  extraType in extras ? extras[extraType] : 0;

const updateExtrasData = ({ ...extrasData }, delivery) => {
  if (!('extras' in delivery)) return extrasData;

  extrasData.Noballs += countExtra('noballs', delivery);
  extrasData.Legbyes += countExtra('legbyes', delivery);
  extrasData.Byes += countExtra('byes', delivery);
  extrasData.Wides += countExtra('wides', delivery);

  return extrasData;
};

const getFormatedOverViewData = (overViewInfo) => {
  const titles = Object.keys(overViewInfo);
  const data = Object.values(overViewInfo);

  return [titles, data].join('\n');
};

const updateOverView = ({ ...overView }, delivery) => {
  overView.Total += delivery.runs.total;
  overView.Wickets += 'wickets' in delivery ? 1 : 0;

  return overView;
};

const fetchInningStats = (firstInning) => {
  const deliveries = fetchAllDeliveries(firstInning.overs);

  return deliveries.reduce((inningStats, delivery) => {
    const newOverView = updateOverView(inningStats.overView, delivery);
    const newBattingStats = updateBattingStats(inningStats.batters, delivery);
    const newBowlingStats = updateBowlingStats(inningStats.bowlers, delivery);
    const newExtrasStats = updateExtrasData(inningStats.extras, delivery);

    return {
      overView: newOverView,
      batters: newBattingStats,
      bowlers: newBowlingStats,
      extras: newExtrasStats
    };
  }, { overView: createDefaultOverview(), batters: {}, bowlers: {}, extras: createDefaultExtras() });
};

const formatTeamScoreCard = (inningPlayers, inningDataSummary) => {
  const { overView, batters, bowlers, extras } = fetchInningStats(inningDataSummary);
  overView.Team = inningDataSummary.team;
  const overViewData = getFormatedOverViewData(overView);
  const battingDetails = formatBattersData(inningPlayers, batters);
  const bowlingDetails = formatBowlersData(bowlers);
  const extrasDetails = formatExtrasDetails(extras);
  const seperator = '\n---\n';

  return [overViewData, battingDetails, extrasDetails, bowlingDetails].join(seperator);
};

const getInningPlayers = ({ team }, players) => {
  const [firstTeam] = Object.keys(players);
  const [firstTeamPlayers, secondTeamPlayers] = Object.values(players);

  return team === firstTeam ? firstTeamPlayers : secondTeamPlayers;
};

const getInningWisePlayers = (ballByBall) => {
  const [firstInning, secondInning] = ballByBall.innings;
  const firstInningPlayers = getInningPlayers(firstInning, ballByBall.info.players);
  const secondInningPlayers = getInningPlayers(secondInning, ballByBall.info.players);

  return [firstInningPlayers, secondInningPlayers];
};

export const generateScoreCard = ballByBall => {
  const [firstInning, secondInning] = ballByBall.innings;
  const [firstInningPlayers, secondInningPlayers] = getInningWisePlayers(ballByBall);
  const team1ScoreCard = formatTeamScoreCard(firstInningPlayers, firstInning);
  const team2ScoreCard = formatTeamScoreCard(secondInningPlayers, secondInning);

  return [team1ScoreCard, '---', '', team2ScoreCard].join('\n');
};