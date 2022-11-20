import { Scoreboard } from './scoreboard';
import { Match } from './match';

describe(
  'Test Live Football World Cup Scoreboard library',
  () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
      scoreboard = new Scoreboard();
    });

    describe('Start a new game', () => {
      const homeTeamName = 'Home Team';
      const awayTeamName = 'Away Team';
      let newGame: Match;

      beforeEach(() => {
        newGame = scoreboard.startNewGame({
          homeTeamName,
          awayTeamName,
        });
      });

      it('Create a new game', () => {
        expect(newGame).not.toBeUndefined();
      });
      it('A new game have correct teams names', () => {
        expect(newGame.homeTeamName).toBe(homeTeamName);
        expect(newGame.awayTeamName).toBe(awayTeamName);
      });
      it('A new game have 0 - 0 score', () => {
        expect(newGame.homeTeamScore).toBe(0);
        expect(newGame.awayTeamScore).toBe(0);
      });
      it('A new match is in scoreboard', () => {
        expect(scoreboard).toContainEqual(newGame);
      });
    });
    describe('Update score', () => {
      it.todo('Update score is recorded');
      it.todo('Accept only integers as a score');
      it.todo('Does not allow negative values as a score');
    });
    describe('Finish game currently in progress', () => {
      it.todo('Removes a match from the scoreboard');
    });
    describe('Get a summary of games in progress', () => {
      it.todo('The games are ordered by their total score');
      it.todo('The games with the same total score are ordered by the most recently started match');
    });
  },
);
