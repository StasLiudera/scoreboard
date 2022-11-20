import { Match } from './match';

describe('Test Match Class', () => {
  const homeTeamName = 'Home Team';
  const awayTeamName = 'Away Team';
  let match: Match;

  beforeEach(() => {
    match = new Match({
      homeTeamName,
      awayTeamName,
    });
  });

  it('Create a new match', () => {
    expect(match.homeTeamName).toBe(homeTeamName);
    expect(match.awayTeamName).toBe(awayTeamName);
  });

  it('A new match have 0 - 0 score', () => {
    expect(match.homeTeamScore).toBe(0);
    expect(match.awayTeamScore).toBe(0);
  });

  describe('Update match score', () => {
    it('Update score is recorded', () => {
      const homeTeamScore = 10;
      const awayTeamScore = 20;

      match.updateScore({
        homeTeamScore,
        awayTeamScore,
      });

      expect(match.homeTeamScore).toBe(homeTeamScore);
      expect(match.awayTeamScore).toBe(awayTeamScore);
    });

    it('Throw error on Home Team Score string value', () => {
      const homeTeamScore = '10' as unknown as number;
      const awayTeamScore = 20;

      expect(() => {
        match.updateScore({
          homeTeamScore,
          awayTeamScore,
        });
      }).toThrow();
    });

    it('Throw error on Away Score string value', () => {
      const homeTeamScore = 10;
      const awayTeamScore = '20' as unknown as number;

      expect(() => {
        match.updateScore({
          homeTeamScore,
          awayTeamScore,
        });
      }).toThrow();
    });

    it('Throw error on Home Team Score float value', () => {
      const homeTeamScore = 10.1;
      const awayTeamScore = 10;

      expect(() => {
        match.updateScore({
          homeTeamScore,
          awayTeamScore,
        });
      }).toThrow();
    });

    it('Throw error on Away Team Score float value', () => {
      const homeTeamScore = 10;
      const awayTeamScore = 20.1;

      expect(() => {
        match.updateScore({
          homeTeamScore,
          awayTeamScore,
        });
      }).toThrow();
    });

    it('Throw error on Home Team Score negative values', () => {
      const homeTeamScore = -10;
      const awayTeamScore = 20;

      expect(() => {
        match.updateScore({
          homeTeamScore,
          awayTeamScore,
        });
      }).toThrow();
    });

    it('Throw error on Away Team Score negative values', () => {
      const homeTeamScore = 10;
      const awayTeamScore = -20;

      expect(() => {
        match.updateScore({
          homeTeamScore,
          awayTeamScore,
        });
      }).toThrow();
    });
  });
});
