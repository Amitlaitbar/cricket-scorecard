import { updateBattingStats } from "../src/scorecard.js";
import { assertEquals } from "jsr:@std/assert";

const delivery = {
  batter: 'BB McCullum',
  bowler: 'P Kumar',
  non_striker: 'SC Ganguly',
  runs: {
    batter: 0,
    extras: 0,
    total: 0,
  },
};

Deno.test('Should update the runs when battman hits four', () => {
  const sampleData = { ...delivery, runs: { batter: 4 } };
  const expectedOutput = {
    "BB McCullum": {
      Batter: "BB McCullum",
      Dismissal: "not out",
      Runs: 4,
      Balls: 1,
      '4s': 1,
      '6s': 0
    }
  };

  assertEquals(updateBattingStats({}, sampleData), expectedOutput);
});

Deno.test('Should update the runs when battman hits six', () => {
  const sampleData = { ...delivery, runs: { batter: 6, '4s': 0, '6s': 1 } };
  const expectedOutput = {
    "BB McCullum": {
      Batter: "BB McCullum",
      Dismissal: "not out",
      Runs: 6,
      Balls: 1,
      '4s': 0,
      '6s': 1
    }
  };

  assertEquals(updateBattingStats({}, sampleData), expectedOutput);
});

Deno.test('Should update the runs when battman runs for 2', () => {
  const sampleData = { ...delivery, runs: { batter: 2, '4s': 0, '6s': 0 } };
  const expectedOutput = {
    "BB McCullum": {
      Batter: "BB McCullum",
      Dismissal: "not out",
      Runs: 2,
      Balls: 1,
      '4s': 0,
      '6s': 0
    }
  };

  assertEquals(updateBattingStats({}, sampleData), expectedOutput);
});

Deno.test('Should update the runs when battman runs for 1', () => {
  const sampleData = { ...delivery, runs: { batter: 1, '4s': 0, '6s': 0 } };
  const expectedOutput = {
    "BB McCullum": {
      Batter: "BB McCullum",
      Dismissal: "not out",
      Runs: 1,
      Balls: 1,
      '4s': 0,
      '6s': 0
    }
  };

  assertEquals(updateBattingStats({}, sampleData), expectedOutput);
});