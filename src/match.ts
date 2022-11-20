interface MatchConstructorProperties {
  homeTeamName : string,
  awayTeamName: string
}

class Match {
  readonly homeTeamName: string;

  readonly awayTeamName : string;

  readonly homeTeamScore: number;

  readonly awayTeamScore: number;

  constructor({ homeTeamName, awayTeamName }: MatchConstructorProperties) {
    this.homeTeamName = homeTeamName;
    this.awayTeamName = awayTeamName;
    this.homeTeamScore = 0;
    this.awayTeamScore = 0;
  }
}

export default Match;
export {
  Match,
};
