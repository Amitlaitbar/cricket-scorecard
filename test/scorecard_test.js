import { generateScoreCard } from '../src/scorecard.js';
import { assertEquals } from 'jsr:@std/assert';
import { ballByBall as match1 } from '../data/match_1.js';
import { ballByBall as match2 } from '../data/match_2.js';
import { ballByBall as match3 } from '../data/match_3.js';
import { ballByBall as match4 } from '../data/match_4.js';

Deno.test('should generate scorecard for match1', () => {
  const expectedOutput = `Team,Total,Wickets
Kolkata Knight Riders,222,3
---
Batter,Dismissal,Runs,Balls,4s,6s
SC Ganguly,c JH Kallis b Z Khan,10,12,2,0
BB McCullum,not out,158,73,10,13
RT Ponting,c P Kumar b JH Kallis,20,20,1,1
DJ Hussey,c CL White b AA Noffke,12,12,1,0
Mohammad Hafeez,not out,5,3,1,0
---
Noballs,Wides,Legbyes,Byes
0,9,4,4
---
Bowler,O,R,W
P Kumar,4.0,41,0
Z Khan,4.0,38,1
AA Noffke,4.0,41,1
JH Kallis,4.0,52,1
SB Joshi,3.0,26,0
CL White,1.0,24,0
---

Team,Total,Wickets
Royal Challengers Bangalore,82,10
---
Batter,Dismissal,Runs,Balls,4s,6s
R Dravid,b I Sharma,2,3,0,0
W Jaffer,c RT Ponting b AB Dinda,6,16,0,0
V Kohli,b AB Dinda,1,5,0,0
JH Kallis,c M Kartik b AB Agarkar,8,7,0,1
CL White,c WP Saha b AB Agarkar,6,10,0,0
MV Boucher,c M Kartik b SC Ganguly,7,9,1,0
B Akhil,c RT Ponting b AB Agarkar,0,2,0,0
AA Noffke,run out (AB Agarkar),9,10,1,0
P Kumar,not out,18,15,1,2
Z Khan,b SC Ganguly,3,8,0,0
SB Joshi,c BB McCullum b LR Shukla,3,6,0,0
---
Noballs,Wides,Legbyes,Byes
0,11,8,0
---
Bowler,O,R,W
AB Dinda,3.0,9,2
I Sharma,3.0,13,1
AB Agarkar,4.0,25,3
SC Ganguly,4.0,23,2
LR Shukla,1.1,12,1`;
  assertEquals(generateScoreCard(match1), expectedOutput);
});

Deno.test('should generate scorecard for match2', () => {
  const expectedOutput = `Team,Total,Wickets
Kings XI Punjab,170,6
---
Batter,Dismissal,Runs,Balls,4s,6s
PC Valthaty,b IK Pathan,62,50,6,3
AC Gilchrist,c DA Warner b M Morkel,9,9,2,0
SE Marsh,c M Morkel b IK Pathan,46,28,5,3
KD Karthik,c JR Hopes b AM Salvi,27,19,4,0
DJ Hussey,c JR Hopes b AM Salvi,3,4,0,0
Mandeep Singh,b IK Pathan,11,7,2,0
RJ Harris,not out,2,2,0,0
PP Chawla,not out,1,1,0,0
---
Noballs,Wides,Legbyes,Byes
0,7,2,0
---
Bowler,O,R,W
IK Pathan,4.0,28,3
M Morkel,4.0,23,1
VR Aaron,4.0,26,0
AM Salvi,4.0,41,2
JR Hopes,3.0,27,0
S Sriram,1.0,25,0
---

Team,Total,Wickets
Delhi Daredevils,141,8
---
Batter,Dismissal,Runs,Balls,4s,6s
NV Ojha,c AC Gilchrist b SJ Srivastava,28,28,2,2
DA Warner,c AC Gilchrist b SJ Srivastava,29,29,4,1
Y Venugopal Rao,c RJ Harris b PP Chawla,16,13,1,1
S Sriram,c KD Karthik b PP Chawla,4,7,0,0
IK Pathan,c Mandeep Singh b PC Valthaty,3,7,0,0
JR Hopes,c AC Gilchrist b PP Chawla,7,7,1,0
TR Birt,c RJ Harris b P Kumar,16,11,2,1
Y Nagar,lbw RJ Harris,10,7,2,0
M Morkel,not out,16,6,1,1
VR Aaron,not out,0,5,0,0
---
Noballs,Wides,Legbyes,Byes
0,8,4,0
---
Bowler,O,R,W
P Kumar,4.0,32,1
RJ Harris,4.0,19,1
SJ Srivastava,4.0,39,2
PP Chawla,4.0,16,3
PC Valthaty,4.0,35,1`;
  assertEquals(generateScoreCard(match2), expectedOutput);
});
Deno.test('should generate scorecard for match3', () => {
  const expectedOutput = `Team,Total,Wickets
Chennai Super Kings,170,5
---
Batter,Dismissal,Runs,Balls,4s,6s
F du Plessis,b SM Curran,96,55,10,4
SR Watson,b SM Curran,7,11,1,0
SK Raina,c Mohammed Shami b SM Curran,53,38,5,2
MS Dhoni,not out,10,12,0,0
AT Rayudu,c Mandeep Singh b Mohammed Shami,1,2,0,0
KM Jadhav,b Mohammed Shami,0,1,0,0
DJ Bravo,not out,1,1,0,0
---
Noballs,Wides,Legbyes,Byes
0,1,1,0
---
Bowler,O,R,W
Harpreet Brar,3.0,24,0
Mohammed Shami,3.0,18,2
SM Curran,4.0,35,3
R Ashwin,4.0,23,0
AJ Tye,3.0,37,0
M Ashwin,3.0,33,0
---

Team,Total,Wickets
Kings XI Punjab,173,4
---
Batter,Dismissal,Runs,Balls,4s,6s
KL Rahul,c Imran Tahir b Harbhajan Singh,71,36,7,5
CH Gayle,c DR Shorey b Harbhajan Singh,28,28,2,2
N Pooran,c MS Dhoni b RA Jadeja,36,22,2,3
MA Agarwal,c RA Jadeja b Harbhajan Singh,7,6,1,0
Mandeep Singh,not out,11,9,0,0
SM Curran,not out,6,7,1,0
---
Noballs,Wides,Legbyes,Byes
0,5,5,4
---
Bowler,O,R,W
DL Chahar,4.0,28,0
Harbhajan Singh,4.0,58,3
DJ Bravo,4.0,31,0
Imran Tahir,4.0,40,0
RA Jadeja,2.0,16,1`;
  assertEquals(generateScoreCard(match3), expectedOutput);
});

Deno.test('should generate scorecard for match4', () => {
  const expectedOutput = `Team,Total,Wickets
Delhi Daredevils,168,8
---
Batter,Dismissal,Runs,Balls,4s,6s
SV Samson,run out (BA Stokes),2,4,0,0
KK Nair,c JD Unadkat b BA Stokes,64,45,9,0
SS Iyer,c MS Dhoni b JD Unadkat,3,4,0,0
RR Pant,c DT Christian b A Zampa,36,22,4,2
MN Samuels,c MS Dhoni b DT Christian,27,21,1,2
CJ Anderson,st MS Dhoni b Washington Sundar,3,5,0,0
PJ Cummins,b BA Stokes,11,6,0,1
A Mishra,not out,13,9,0,1
Mohammed Shami,c BA Stokes b JD Unadkat,2,4,0,0
---
Noballs,Wides,Legbyes,Byes
0,4,3,0
---
Bowler,O,R,W
JD Unadkat,4.0,29,2
SN Thakur,3.0,36,0
Washington Sundar,3.0,23,1
BA Stokes,4.0,33,2
A Zampa,4.0,29,1
DT Christian,2.0,18,1
---

Team,Total,Wickets
Rising Pune Supergiant,161,7
---
Batter,Dismissal,Runs,Balls,4s,6s
AM Rahane,b Z Khan,0,1,0,0
RA Tripathi,c RR Pant b Z Khan,7,6,1,0
SPD Smith,lbw S Nadeem,38,32,4,1
MK Tiwary,b PJ Cummins,60,45,5,3
BA Stokes,c CJ Anderson b Mohammed Shami,33,25,3,2
MS Dhoni,run out (Mohammed Shami),5,5,0,0
DT Christian,lbw Mohammed Shami,3,3,0,0
Washington Sundar,not out,5,3,0,0
---
Noballs,Wides,Legbyes,Byes
0,5,5,0
---
Bowler,O,R,W
Z Khan,4.0,25,2
Mohammed Shami,4.0,37,2
S Nadeem,3.0,21,1
A Mishra,3.0,26,0
PJ Cummins,4.0,35,1
MN Samuels,1.0,12,0
CJ Anderson,1.0,5,0`;
  assertEquals(generateScoreCard(match4), expectedOutput);
});
