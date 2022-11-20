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
});
