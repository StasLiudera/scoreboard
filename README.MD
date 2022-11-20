# Live Football World Cup Scoreboard library
This repository contains the implementation of the Live Football World Cup Score Board as a simple library.

## Description
Library is written in TypeScript and uses Classes, that can be used separately.
Each Class have its own tests.
Library contains two classes:
* Match (in "Coding Exercise" "Task requirements" were used two synonymous terms "game" and "match")
* Scoreboard

## Classes
### Match
This Class is responsible for containing information about each game:
* `homeTeamName` - readonly name of Home Team, is set during Class construction.
* `awayTeamName` - readonly name of Away Team, is set during Class construction.
* `homeTeamScore` - getter of private property `privateHomeTeamScore`, that can be changed only by `updateScore` method.
* `awayTeamScore` - getter of private property `privateAwayTeamScore`, that can be changed only by `updateScore` method.
* `score` - getter that will return total game score.

Class also contains 1 methods:
* `updateScore` - method that can update scores for Home and Away Teams.

#### Example:
```javascript
// Import Statement
import { Match } from 'scoreboard';

// Create new Match object
const match = new Match({
  homeTeamName: 'Home Team',
  awayTeamName: 'Away Team',
});

// Undate Score
updateScore({
  homeTeamScore: 1,
  awayTeamScore: 2
});

// Get home team name
console.log(match.homeTeamName); //"Home Team"
// Get away team name
console.log(match.awayTeamName); //"Away Team"
// Get home team score
console.log(match.homeTeamScore); //1
// Get away team score
console.log(match.awayTeamScore); //2
// Get total score
console.log(match.score); //3
```

### Scoreboard Class
This Class is responsible for containing scoreboard information:
* `games` - is getter of private property `privateGames` that return ordered list of `Match` class objects.

Class also contains 2 methods:
* `startNewGame` - method will create new `Match` class object add it to `privateGames` and return it.
* `finishGame` - method that removes `Match` class object from `privateGames`.

#### Example:
```javascript
// Import Statement
import { Scoreboard } from 'scoreboard';

// Create new Scoreboard object
const scoreboard = new Scoreboard();

// Add Match to the Scoreboard
const martch = scoreboard.startNewGame({
    homeTeamName: 'Home Team',
    awayTeamName: 'Away Team',
});

// Update Match score
updateScore({
    homeTeamScore: 1,
    awayTeamScore: 2
});

// Remove Match of the Scoreboard
scoreboard.finishGame(martch);

// Get Scoreboard games
console.log(scoreboard.games); //[]
```

## Scripts
* `npm run build` - used to build package
* `npm run lint` - used to linting source code
* `npm run test` - used to run jest tests

## Possible improvements
* Don't allow score change after removing `Match` of the `Scoreboard`
* Validate teams names (Don't allow same name in one `Match`, `Scoreboard`)
