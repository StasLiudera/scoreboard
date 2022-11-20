describe(
  'Test Live Football World Cup Scoreboard library',
  () => {
    describe('Start a new game', () => {
      it.todo('Adds a new game');
      it.todo('A new game have 0 - 0 score');
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
