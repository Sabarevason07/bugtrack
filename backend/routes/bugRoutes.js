const express = require('express');
const {
  getAllBugs,
  getBugById,
  createBug,
  updateBug,
  markBugAsSolved,
  deleteBug,
} = require('../controllers/bugController');

const router = express.Router();

router.get('/', getAllBugs);
router.get('/:id', getBugById);
router.post('/', createBug);
router.put('/:id', updateBug);
router.put('/:id/solved', markBugAsSolved);
router.delete('/:id', deleteBug);

module.exports = router;
