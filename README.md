# Cricket Match Summary Generator

## Overview

This assignment involves creating a program that takes detailed ball-by-ball data of a cricket match as input and generates a summarized scoreboard as output. The goal is to accurately process the match data to produce a clear and concise representation of team scores, individual player statistics, extras, and bowling figures.

---

## Input Format

The input will be an object that contains detailed ball-by-ball information for each over of the match. Each delivery object has the following fields:

### Delivery Object Structure

```json
{
  "batter": "SC Ganguly",
  "bowler": "P Kumar",
  "extras": {
    "legbyes": 1
  },
  "non_striker": "BB McCullum",
  "runs": {
    "batter": 0,
    "extras": 1,
    "total": 1
  },
  "wickets": [
    {
      "kind": "caught",
      "player_out": "SC Ganguly",
      "fielders": [{ "name": "JH Kallis" }]
    }
  ]
}
```

### Key Fields

1. **`batter`**: Name of the batter on strike.
2. **`bowler`**: Name of the bowler delivering the ball.
3. **`extras`**: Details of any extra runs (e.g., legbyes, wides, noballs, byes).
4. **`non_striker`**: Name of the batter at the non-striker's end.
5. **`runs`**:
   - `batter`: Runs scored by the batter on the delivery.
   - `extras`: Runs added due to extras.
   - `total`: Total runs scored on the delivery (batter + extras).
6. **`wickets`** (optional): Details if a wicket falls on the delivery.
   - `kind`: Type of dismissal (e.g., caught, bowled).
   - `player_out`: Name of the batter dismissed.
   - `fielders`: Fielders involved in the dismissal.
7. **`non_boundary`**: Boolean flag indicating if a 4 or 6 was scored by running.

---

## Output Format

The output will be a summarized scoreboard structured into the following sections:

1. **Team Total**

   ```
   Team,Total,Wickets
   Kolkata Knight Riders,222,3
   ```

2. **Batting Summary**

   ```
   Batter,Dismissal,Runs,Balls,4s,6s
   SC Ganguly,c JH Kallis b Z Khan,10,12,2,0
   ```

3. **Extras Summary**

   ```
   Noballs,Wides,Legbyes,Byes
   0,9,4,4
   ```

4. **Bowling Summary**
   ```
   Bowler,O,R,W
   P Kumar,4.0,41,0
   ```

---

## Tasks

Your program should:

1. Calculate the total runs, wickets, and extras for each team.
2. Summarize individual batter statistics:
   - Runs scored.
   - Balls faced.
   - Number of 4s and 6s (consider `non_boundary` flag).
3. Summarize extras:
   - Noballs, wides, legbyes, byes.
4. Summarize bowling figures for each bowler:
   - Overs bowled, runs conceded, and wickets taken.
5. Format the summarized information as per the provided output example.

---

Inputs are provided in the `data` directory. Outputs are provided in the `output` directory.

---

## Guidelines

- Write tests
- Handle all possible cases.
- Do not worry about the final output format to begin with.

---
