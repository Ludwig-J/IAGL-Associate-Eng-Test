
let todoList = {
  todos: [] 
};

module.exports = {
  getTodos: () => Promise.resolve(todoList.todos),

  addTodo: (todo) => {
    todoList.todos.push(todo)
  }
};