const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post('/api/todo', async (req, res) => {
    const todo = req.body;
    if (!todo) {
      return res.status(400).json({ error: 'Please add a todo' });
    }
    try {
      await todoService.addTodo(todo);
      res.status(201).json(await todoService.getTodos());
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding the todo' });
    }
  });

  return server;
};
module.exports = server;