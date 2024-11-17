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


  // Add a new route to add a todo
  server.post('/api/todo', async (req, res) => {
    const newTodo = req.body;
    if (!newTodo) {
      return res.status(400).json({ error: 'Please add a todo' });
    }
    try {
      const addedTodo = await todoService.addTodo(newTodo);
      res.status(201).json(addedTodo);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding the todo' });
    }
  });
  return server;
};
module.exports = server;