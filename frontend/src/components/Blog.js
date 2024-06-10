<<<<<<< HEAD
=======

// BugTracker.js
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
<<<<<<< HEAD
=======
import './Blog.css';

>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c

const BugTracker = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('high');
  const [reportedBy, setReportedBy] = useState('');
  const [date, setDate] = useState('');

  const handleCreateBug = async () => {
    try {
<<<<<<< HEAD
      await axios.post('http://127.0.0.1:3080/bugs', { title, content, priority, reportedBy, date });
=======
      await axios.post('http://127.0.0.1:3050/bugs', { title, content, priority, reportedBy, date });
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
      alert('Bug created successfully');
      setTitle('');
      setContent('');
      setReportedBy('');
      setDate('');
    } catch (error) {
      console.error(error);
      alert('Failed to create bug');
    }
  };

  return (
    <div>
      <h3>Bug Tracker</h3>
<<<<<<< HEAD
      <Form>
=======
      <Form className="form">
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="priority">
          <Form.Label>Priority</Form.Label>
          <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="reportedBy">
          <Form.Label>Reported By</Form.Label>
          <Form.Control type="text" value={reportedBy} onChange={(e) => setReportedBy(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleCreateBug}>Create Bug</Button>
      </Form>
    </div>
  );
};

<<<<<<< HEAD
export default BugTracker;
=======
export default BugTracker;
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
