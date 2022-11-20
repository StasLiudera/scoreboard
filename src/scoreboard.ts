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

  finishGame(game: Match) {
    const gameIndex = this.privateGames
      .findIndex((searchGame) => searchGame === game);

    this.privateGames.splice(gameIndex, 1);
  }
}

export default Scoreboard;
export {
  Scoreboard,
};
