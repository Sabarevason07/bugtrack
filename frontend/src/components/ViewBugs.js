import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ViewBugs = () => {
  const [bugs, setBugs] = useState([]);
  const [editBug, setEditBug] = useState(null);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3080/bugs');
      setBugs(response.data);
    } catch (error) {
      console.error(error);
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
      await axios.put(`http://127.0.0.1:3080/bugs/${editBug._id}`, editBug);
      const updatedBugs = bugs.map(bug => bug._id === editBug._id ? editBug : bug);
      setBugs(updatedBugs);
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

  const handleDeleteBug = async (bugId) => {
    try {
      await axios.delete(`http://127.0.0.1:3080/bugs/${bugId}`);
      setBugs(bugs.filter(bug => bug._id !== bugId));
      alert('Bug deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to delete bug');
    }
  };

  const handleSolveBug = async (bugId) => {
    try {
      await axios.put(`http://127.0.0.1:3080/bugs/${bugId}/solved`);
      const updatedBugs = bugs.map(bug => bug._id === bugId ? { ...bug, status: 'Solved' } : bug);
      setBugs(updatedBugs);
      alert('Bug marked as solved successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to mark bug as solved');
    }
  };

  return (
    <div>
      <h3>View Bugs</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {bugs.map((bug) => (
          <Card key={bug._id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              {editBug && editBug._id === bug._id ? (
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
                  <Button style={{ margin: '5px' }} variant="primary" onClick={() => handleDeleteBug(bug._id)}>Delete</Button>
                  {bug.status.toLowerCase() !== 'solved' && (
                    <Button variant="primary" onClick={() => handleSolveBug(bug._id)}>Mark as Solved</Button>
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

export default ViewBugs;
