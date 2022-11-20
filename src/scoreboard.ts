import { Match, MatchConstructorProperties } from './match';

class Scoreboard {
  private readonly privateGames:Match[] = [];

  get games() {
    return [...this.privateGames];
  }

  startNewGame(props: MatchConstructorProperties) {
    const newGame = new Match(props);

    this.privateGames.push(newGame);

    return newGame;
  }
}

export default Scoreboard;
export {
  Scoreboard,
};
