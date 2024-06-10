// ViewBugs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ViewBugs = () => {
  const [bugs, setBugs] = useState([]);
  const [editBug, setEditBug] = useState(null);
  const [totalBugsCount, setTotalBugsCount] = useState(0);
  const [solvedBugsCount, setSolvedBugsCount] = useState(0);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3050/bugs');
      setBugs(response.data);
    } catch (error) {
      console.error(error);
      // Handle error here
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
      await axios.put(`http://127.0.0.1:3050/bugs/${editBug.id}`, editBug);
      fetchBugs();
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

  const handleDeletebug = async (bugId) => {
    try {
      await axios.delete(`http://127.0.0.1:3050/bugs/${bugId}`);
      setBugs(bugs.filter(bug => bug.id !== bugId));
      alert('Bug deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to delete bug');
    }
  };

  const handleSolveBug = async (bugId) => {
    try {
      await axios.put(`http://127.0.0.1:3050/bugs/${bugId}`, { status: 'Solved' });
      fetchBugs();
      setSolvedBugsCount(prevCount => prevCount + 1);
      setTotalBugsCount(prevCount => prevCount - 1);
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
          <Card key={bug.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              {editBug && editBug.id === bug.id ? (
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
                  <Button style={{ margin: '5px' }} variant="primary" onClick={() => handleDeletebug(bug.id)}>Delete</Button>
                  {bug.status !== 'Solved' && (
                    <Button variant="primary" onClick={() => handleSolveBug(bug.id)}>Mark as Solved</Button>
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