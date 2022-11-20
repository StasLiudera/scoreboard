interface MatchConstructorProperties {
  homeTeamName : string,
  awayTeamName: string
}

interface MatchUpdateScoreProperties {
  homeTeamScore : number,
  awayTeamScore: number
}

class Match {
  readonly homeTeamName: string;

  readonly awayTeamName : string;

  private privateHomeTeamScore: number;

  private privateAwayTeamScore: number;

  get homeTeamScore() { return this.privateHomeTeamScore; }

  get awayTeamScore() { return this.privateAwayTeamScore; }

  get score() { return this.privateHomeTeamScore + this.privateAwayTeamScore; }

  constructor({ homeTeamName, awayTeamName }: MatchConstructorProperties) {
    this.homeTeamName = homeTeamName;
    this.awayTeamName = awayTeamName;
    this.privateHomeTeamScore = 0;
    this.privateAwayTeamScore = 0;
  }

  updateScore({ homeTeamScore, awayTeamScore }: MatchUpdateScoreProperties) {
    if (!Number.isInteger(homeTeamScore)) {
      throw Error('homeTeamScore is no integer');
    }
    if (!Number.isInteger(awayTeamScore)) {
      throw Error('awayTeamScore is no integer');
    }
    if (homeTeamScore < 0) {
      throw Error('homeTeamScore is negative');
    }
    if (awayTeamScore < 0) {
      throw Error('awayTeamScore is negative');
    }

    this.privateHomeTeamScore = homeTeamScore;
    this.privateAwayTeamScore = awayTeamScore;

    return this;
  }
}

export default Match;
export {
  Match,
  MatchUpdateScoreProperties,
  MatchConstructorProperties,
};
