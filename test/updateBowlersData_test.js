import { updateBowlingStats } from "../src/scorecard.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test('Should return not updated Over balls when bowler bowl wide', () => {
  const sampleData = {
    batter: 'SC Ganguly',
    bowler: 'P Kumar',
    extras: {
      wides: 1,
    },
    non_striker: 'BB McCullum',
    runs: {
      batter: 0,
      extras: 1,
      total: 1,
    },
    wickets: [
      {
        kind: 'caught',
        player_out: 'SC Ganguly',
        fielders: [
          {
            name: 'JH Kallis',
          },
        ],
      },
    ]
  };
  const expectedOutput = {
    "P Kumar": {
      Bowler: "P Kumar",
      O: 0,
      R: 1,
      W: 1,
    },
  };
  assertEquals(updateBowlingStats({}, sampleData), expectedOutput);
});
Deno.test('Should return updated Over balls when bowler bowl', () => {
  const sampleData = {
    batter: 'SC Ganguly',
    bowler: 'P Kumar',
    extras: {
      legbyes: 1,
    },
    non_striker: 'BB McCullum',
    runs: {
      batter: 0,
      extras: 1,
      total: 1,
    },
    wickets: [
      {
        kind: 'caught',
        player_out: 'SC Ganguly',
        fielders: [
          {
            name: 'JH Kallis',
          },
        ],
      },
    ]
  };
  const expectedOutput = {
    "P Kumar": {
      Bowler: "P Kumar",
      O: '0.1',
      R: 1,
      W: 1,
    },
  };
  assertEquals(updateBowlingStats({}, sampleData), expectedOutput);
});

Deno.test('Should return not updated Over balls when bowler bowl noball', () => {
  const sampleData = {
    batter: 'SC Ganguly',
    bowler: 'P Kumar',
    extras: {
      noballs: 1,
    },
    non_striker: 'BB McCullum',
    runs: {
      batter: 0,
      extras: 1,
      total: 1,
    },
    wickets: [
      {
        kind: 'caught',
        player_out: 'SC Ganguly',
        fielders: [
          {
            name: 'JH Kallis',
          },
        ],
      },
    ]
  };
  const expectedOutput = {
    "P Kumar": {
      Bowler: "P Kumar",
      O: 0,
      R: 1,
      W: 1,
    },
  };
  assertEquals(updateBowlingStats({}, sampleData), expectedOutput);
});