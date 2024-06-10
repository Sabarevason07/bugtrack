const Bug = require('../models/bug');

exports.getAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBugById = async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json(bug);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBug = async (req, res) => {
  const { title, content, priority, reportedBy, date } = req.body;
  const newBug = new Bug({ title, content, priority, reportedBy, date });
  try {
    await newBug.save();
    res.status(201).json(newBug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBug = async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBug) return res.status(404).json({ message: 'Bug not found' });
    res.json(updatedBug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.markBugAsSolved = async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, { status: 'Solved' }, { new: true });
    if (!updatedBug) return res.status(404).json({ message: 'Bug not found' });
    res.json(updatedBug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBug = async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
