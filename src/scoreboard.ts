import { Match, MatchConstructorProperties } from './match';

class Scoreboard {
  private readonly privateGames:Match[] = [];

  get games() {
    return [...this.privateGames]
      .sort((game1, game2) => game2.score - game1.score);
  }

  startNewGame(props: MatchConstructorProperties) {
    const newGame = new Match(props);

    this.privateGames.unshift(newGame);

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
