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
        expect(scoreboard.games).toContainEqual(newGame);
      });
    });

    describe('Update score', () => {
      const homeTeamName = 'Home Team';
      const awayTeamName = 'Away Team';
      let newGame: Match;

      beforeEach(() => {
        newGame = scoreboard.startNewGame({
          homeTeamName,
          awayTeamName,
        });
      });

      it('Update score is recorded', () => {
        const homeTeamScore = 10;
        const awayTeamScore = 20;

        newGame.updateScore({
          homeTeamScore,
          awayTeamScore,
        });
        expect(newGame.homeTeamScore).toBe(homeTeamScore);
        expect(newGame.awayTeamScore).toBe(awayTeamScore);
        expect(scoreboard.games).toContainEqual(newGame);
      });

      it('Accept only integers as a homeTeamScore', () => {
        const homeTeamScore = 10.10;
        const awayTeamScore = 20;

        expect(() => {
          newGame.updateScore({
            homeTeamScore,
            awayTeamScore,
          });
        }).toThrow();
      });

      it('Accept only integers as a awayTeamScore', () => {
        const homeTeamScore = 10;
        const awayTeamScore = 20.10;

        expect(() => {
          newGame.updateScore({
            homeTeamScore,
            awayTeamScore,
          });
        }).toThrow();
      });

      it('Does not allow negative values as a homeTeamScore', () => {
        const homeTeamScore = -10;
        const awayTeamScore = 20;

        expect(() => {
          newGame.updateScore({
            homeTeamScore,
            awayTeamScore,
          });
        }).toThrow();
      });

      it('Does not allow negative values as a awayTeamScore', () => {
        const homeTeamScore = 10;
        const awayTeamScore = -20;

        expect(() => {
          newGame.updateScore({
            homeTeamScore,
            awayTeamScore,
          });
        }).toThrow();
      });
    });

    describe('Finish game currently in progress', () => {
      it('Removes a match from the scoreboard', () => {
        const newGame = scoreboard.startNewGame({
          homeTeamName: '1',
          awayTeamName: '2',
        });

        scoreboard.finishGame(newGame);

        expect(scoreboard.games).not.toContainEqual(newGame);
      });

      it('Removes only one match from the scoreboard', () => {
        const newGame = scoreboard.startNewGame({
          homeTeamName: '1',
          awayTeamName: '2',
        });
        scoreboard.startNewGame({
          homeTeamName: '3',
          awayTeamName: '4',
        });
        scoreboard.startNewGame({
          homeTeamName: '5',
          awayTeamName: '6',
        });
        scoreboard.startNewGame({
          homeTeamName: '7',
          awayTeamName: '8',
        });
        const gamesCount = scoreboard.games.length;

        scoreboard.finishGame(newGame);

        expect(scoreboard.games).not.toContainEqual(newGame);
        expect(scoreboard.games.length).toBe(gamesCount - 1);
      });
    });

    describe('Get a summary of games in progress order', () => {
      it('The games are ordered by their total score', () => {
        const game3 = scoreboard.startNewGame({ homeTeamName: 'Argentina', awayTeamName: 'Australia' })
          .updateScore({ homeTeamScore: 3, awayTeamScore: 1 });
        const game1 = scoreboard.startNewGame({ homeTeamName: 'Uruguay', awayTeamName: 'Italy' })
          .updateScore({ homeTeamScore: 6, awayTeamScore: 6 });
        const game2 = scoreboard.startNewGame({ homeTeamName: 'Mexico', awayTeamName: 'Canada' })
          .updateScore({ homeTeamScore: 0, awayTeamScore: 5 });

        expect(scoreboard.games).toEqual([game1, game2, game3]);
      });

      it('The games with the same total score are ordered by the most recently started match', () => {
        const game3 = scoreboard.startNewGame({ homeTeamName: 'Mexico', awayTeamName: 'Canada' })
          .updateScore({ homeTeamScore: 0, awayTeamScore: 5 });
        const game2 = scoreboard.startNewGame({ homeTeamName: 'Spain', awayTeamName: 'Brazil' })
          .updateScore({ homeTeamScore: 10, awayTeamScore: 2 });
        const game5 = scoreboard.startNewGame({ homeTeamName: 'Germany', awayTeamName: 'France' })
          .updateScore({ homeTeamScore: 2, awayTeamScore: 2 });
        const game1 = scoreboard.startNewGame({ homeTeamName: 'Uruguay', awayTeamName: 'Italy' })
          .updateScore({ homeTeamScore: 6, awayTeamScore: 6 });
        const game4 = scoreboard.startNewGame({ homeTeamName: 'Argentina', awayTeamName: 'Australia' })
          .updateScore({ homeTeamScore: 3, awayTeamScore: 1 });

        expect(scoreboard.games).toEqual([game1, game2, game3, game4, game5]);
      });
    });

    describe('Find match in as Scoreboard', () => {
      let game1: Match;
      let game2: Match;
      let game3: Match;
      let game4: Match;
      let game5: Match;

      beforeEach(() => {
        game3 = scoreboard.startNewGame({ homeTeamName: 'Mexico', awayTeamName: 'Canada' })
          .updateScore({ homeTeamScore: 0, awayTeamScore: 5 });
        game2 = scoreboard.startNewGame({ homeTeamName: 'Spain', awayTeamName: 'Brazil' })
          .updateScore({ homeTeamScore: 10, awayTeamScore: 2 });
        game5 = scoreboard.startNewGame({ homeTeamName: 'Germany', awayTeamName: 'France' })
          .updateScore({ homeTeamScore: 2, awayTeamScore: 2 });
        game1 = scoreboard.startNewGame({ homeTeamName: 'Uruguay', awayTeamName: 'Italy' })
          .updateScore({ homeTeamScore: 6, awayTeamScore: 6 });
        game4 = scoreboard.startNewGame({ homeTeamName: 'Argentina', awayTeamName: 'Australia' })
          .updateScore({ homeTeamScore: 3, awayTeamScore: 1 });
      });

      it('To found game1', () => {
        const foundGame = scoreboard.findMatch({
          homeTeamName: game1.homeTeamName,
          awayTeamName: game1.awayTeamName,
        });

        expect(foundGame).toEqual(game1);
      });

      it('Not found game if homeTeamName is incorrect', () => {
        const foundGame = scoreboard.findMatch({
          homeTeamName: 'TestName',
          awayTeamName: game1.awayTeamName,
        });

        expect(foundGame).toEqual(undefined);
      });

      it('Not found game1 if awayTeamName is incorrect', () => {
        const foundGame = scoreboard.findMatch({
          homeTeamName: game1.homeTeamName,
          awayTeamName: 'TestName',
        });

        expect(foundGame).toEqual(undefined);
      });

      it('Not found game1 if both is incorrect', () => {
        const foundGame = scoreboard.findMatch({
          homeTeamName: 'TestName',
          awayTeamName: 'TestName',
        });

        expect(foundGame).toEqual(undefined);
      });

      it('Found game1 even if case insensitive', () => {
        const foundGame = scoreboard.findMatch({
          homeTeamName: game1.homeTeamName.toUpperCase(),
          awayTeamName: game1.awayTeamName.toUpperCase(),
        });

        expect(foundGame).toEqual(game1);
      });

      it('Not found game1 if homeTeamName is undefined', () => {
        const foundGame = scoreboard.findMatch({
          homeTeamName: undefined as unknown as string,
          awayTeamName: game1.awayTeamName,
        });

        expect(foundGame).toEqual(undefined);
      });

      it('To Not found match if it is removed from scoreboard', () => {
        scoreboard.finishGame(game1);

        const foundGame = scoreboard.findMatch({
          homeTeamName: game1.homeTeamName,
          awayTeamName: game1.awayTeamName,
        });

        expect(foundGame).toEqual(undefined);
      });
    });
  },
);
