import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Home = () => {
  const [totalBugsCount, setTotalBugsCount] = useState(0);
  const [solvedBugsCount, setSolvedBugsCount] = useState(0);

  useEffect(() => {
    fetchTotalBugsCount();
    fetchSolvedBugsCount();
  }, []);

  const fetchTotalBugsCount = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3003/bugs');
      setTotalBugsCount(response.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSolvedBugsCount = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3003/bugs?status=Solv');
      setSolvedBugsCount(response.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Body>
            <Card.Title>Total Bugs</Card.Title>
            <Card.Text>{totalBugsCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Body>
            <Card.Title>Solved Bugs</Card.Title>
            <Card.Text>{solvedBugsCount}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
