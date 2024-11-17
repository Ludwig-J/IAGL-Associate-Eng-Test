
const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [],
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });
});