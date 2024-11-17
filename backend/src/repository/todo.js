
// This is a simple in-memory repository for the todo list. It has two functions: getTodos and addTodo. getTodos returns the current todo list, and addTodo adds a new todo to the list

let todoList = {
  todos: [],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: (todo) => {
    todoList.todos.push(todo);
    return Promise.resolve(todoList);
  },
};