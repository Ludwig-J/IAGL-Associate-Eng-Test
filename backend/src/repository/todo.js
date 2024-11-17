

let todoList = {
  todos: []
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: (todo) => {
    console.log("inside addTodo")
    todoList.todos.push(todo);
    return Promise.resolve(todoList);
  },
};