import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
=======
import './Home.css';
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c

const Home = () => {
  const [totalBugsCount, setTotalBugsCount] = useState(0);
  const [solvedBugsCount, setSolvedBugsCount] = useState(0);

  useEffect(() => {
    fetchTotalBugsCount();
    fetchSolvedBugsCount();
  }, []);

  const fetchTotalBugsCount = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get('http://127.0.0.1:3080/bugs');
=======
      const response = await axios.get('http://127.0.0.1:3003/bugs');
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
      setTotalBugsCount(response.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSolvedBugsCount = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get('http://127.0.0.1:3080/bugs?status=Solved');
=======
      const response = await axios.get('http://127.0.0.1:3003/bugs?status=Solv');
>>>>>>> e00ef8e0ddbd53f3b75942345d6d45d23c297b6c
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
