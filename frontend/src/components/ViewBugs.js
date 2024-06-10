<<<<<<< HEAD
=======
// ViewBugs.js
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
=======
import './View.css';
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c

const ViewBugs = () => {
  const [bugs, setBugs] = useState([]);
  const [editBug, setEditBug] = useState(null);
<<<<<<< HEAD
=======
  const [totalBugsCount, setTotalBugsCount] = useState(0);
  const [solvedBugsCount, setSolvedBugsCount] = useState(0);
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get('http://127.0.0.1:3080/bugs');
      setBugs(response.data);
    } catch (error) {
      console.error(error);
=======
      const response = await axios.get('http://127.0.0.1:3050/bugs');
      setBugs(response.data);
    } catch (error) {
      console.error(error);
      // Handle error here
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
    }
  };

  const handleEdit = (bug) => {
    setEditBug(bug);
  };

  const handleCancelEdit = () => {
    setEditBug(null);
  };

  const handleUpdate = async () => {
    try {
<<<<<<< HEAD
      await axios.put(`http://127.0.0.1:3080/bugs/${editBug._id}`, editBug);
      const updatedBugs = bugs.map(bug => bug._id === editBug._id ? editBug : bug);
      setBugs(updatedBugs);
=======
      await axios.put(`http://127.0.0.1:3050/bugs/${editBug.id}`, editBug);
      fetchBugs();
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
      setEditBug(null);
      alert('Bug updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update bug');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBug({ ...editBug, [name]: value });
  };

<<<<<<< HEAD
  const handleDeleteBug = async (bugId) => {
    try {
      await axios.delete(`http://127.0.0.1:3080/bugs/${bugId}`);
      setBugs(bugs.filter(bug => bug._id !== bugId));
=======
  const handleDeletebug = async (bugId) => {
    try {
      await axios.delete(`http://127.0.0.1:3050/bugs/${bugId}`);
      setBugs(bugs.filter(bug => bug.id !== bugId));
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
      alert('Bug deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to delete bug');
    }
  };

  const handleSolveBug = async (bugId) => {
    try {
<<<<<<< HEAD
      await axios.put(`http://127.0.0.1:3080/bugs/${bugId}/solved`);
      const updatedBugs = bugs.map(bug => bug._id === bugId ? { ...bug, status: 'Solved' } : bug);
      setBugs(updatedBugs);
=======
      await axios.put(`http://127.0.0.1:3050/bugs/${bugId}`, { status: 'Solved' });
      fetchBugs();
      setSolvedBugsCount(prevCount => prevCount + 1);
      setTotalBugsCount(prevCount => prevCount - 1);
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
      alert('Bug marked as solved successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to mark bug as solved');
    }
  };
<<<<<<< HEAD

  return (
    <div>
      <h3>View Bugs</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {bugs.map((bug) => (
          <Card key={bug._id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              {editBug && editBug._id === bug._id ? (
=======
  
  return (
    <div>
      <h3>View Bugs</h3>
      <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
        {bugs.map((bug) => (
          <Card className="bug" key={bug.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              {editBug && editBug.id === bug.id ? (
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
                <div>
                  <input type="text" name="title" value={editBug.title} onChange={handleChange} />
                  <textarea name="content" value={editBug.content} onChange={handleChange} />
                  <input type="text" name="priority" value={editBug.priority} onChange={handleChange} />
                  <input type="text" name="reportedBy" value={editBug.reportedBy} onChange={handleChange} />
                  <input type="text" name="date" value={editBug.date} onChange={handleChange} />
                  <Button variant="primary" onClick={handleUpdate}>Update</Button>
                  <Button variant="secondary" onClick={handleCancelEdit}>Cancel</Button>
                </div>
              ) : (
                <div>
                  <Card.Title>{bug.title}</Card.Title>
                  <Card.Text>{bug.content}</Card.Text>
                  <Card.Text>Priority: {bug.priority} </Card.Text>
                  <Card.Text>Reported By: {bug.reportedBy} </Card.Text>
                  <Card.Text>Date: {bug.date} </Card.Text>
                  <Button style={{ margin: '5px' }} variant="primary" onClick={() => handleEdit(bug)}>Edit</Button>
<<<<<<< HEAD
                  <Button style={{ margin: '5px' }} variant="primary" onClick={() => handleDeleteBug(bug._id)}>Delete</Button>
                  {bug.status.toLowerCase() !== 'solved' && (
                    <Button variant="primary" onClick={() => handleSolveBug(bug._id)}>Mark as Solved</Button>
=======
                  <Button style={{ margin: '5px' }} variant="primary" onClick={() => handleDeletebug(bug.id)}>Delete</Button>
                  {bug.status !== 'Solved' && (
                    <Button variant="primary" onClick={() => handleSolveBug(bug.id)}>Mark as Solved</Button>
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
                  )}
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ViewBugs;
=======
export default ViewBugs;
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
