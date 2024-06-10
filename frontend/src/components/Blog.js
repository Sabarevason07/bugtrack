
// BugTracker.js
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Blog.css';


const BugTracker = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('high');
  const [reportedBy, setReportedBy] = useState('');
  const [date, setDate] = useState('');

  const handleCreateBug = async () => {
    try {
      await axios.post('http://127.0.0.1:3050/bugs', { title, content, priority, reportedBy, date });
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
      <Form className="form">
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

export default BugTracker;
