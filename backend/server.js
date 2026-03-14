const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// In-memory store
let todos = [];
let nextId = 1;

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST create todo
app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Text is required' });
  }
  const todo = { id: nextId++, text: text.trim() };
  todos.push(todo);
  res.status(201).json(todo);
});

// DELETE todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running`);
  console.log(`Server running at http://localhost:${PORT}`);
  const { exec } = require('child_process');
  exec(`start http://localhost:${PORT}`);
});
