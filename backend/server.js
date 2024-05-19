const express = require('express');
const app = express();
const PORT = 3050;
const cors = require('cors');

let bugs = [];

app.use(express.json());
app.use(cors());

app.get('/bugs', (req, res) => {
  res.send(bugs);
});

app.get('/bugs/:id', (req, res) => {
  const bugId = req.params.id;
  const bug = bugs.find(bug => bug.id === bugId);
  if (!bug) {
    return res.status(404).json({ message: 'Bug not found' });
  }
  res.json(bug);
});

app.post('/bugs', (req, res) => {
  const { title, content, priority, reportedBy, date } = req.body;
  const newBug = { id: Date.now().toString(), title, content, priority, reportedBy, date };
  bugs.push(newBug);
  res.status(201).json(newBug);
});

app.put('/bugs/:id', (req, res) => {
  const bugId = req.params.id;
  const { title, content, priority, reportedBy, date } = req.body;
  const bugIndex = bugs.findIndex(bug => bug.id === bugId);
  if (bugIndex === -1) {
    return res.status(404).json({ message: 'Bug not found' });
  }
  bugs[bugIndex] = { ...bugs[bugIndex], title, content, priority, reportedBy, date };
  res.json(bugs[bugIndex]);
});

// New route to mark bug as solved
app.put('/bugs/:id/solved', (req, res) => {
  const bugId = req.params.id;
  const bugIndex = bugs.findIndex(bug => bug.id === bugId);
  if (bugIndex === -1) {
    return res.status(404).json({ message: 'Bug not found' });
  }
  bugs[bugIndex].status = 'Solved';
  res.json(bugs[bugIndex]);
});

app.delete('/bugs/:id', (req, res) => {
  const bugId = req.params.id;
  bugs = bugs.filter(bug => bug.id !== bugId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
