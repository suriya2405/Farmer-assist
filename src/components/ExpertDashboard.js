// src/components/ExpertDashboard.js
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

const Container = styled.div`
  padding: 40px;
  background: #f4f7fc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const QueryCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const QueryDetails = styled.div`
  margin-bottom: 20px;
`;

const QueryDetail = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #555;
`;

const QueryLabel = styled.span`
  font-weight: bold;
  color: #333;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExpertDashboard = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const querySnapshot = await getDocs(collection(db, 'queries'));
      const queriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQueries(queriesData);
    };
    fetchQueries();
  }, []);

  const handleAnswerClick = (queryId) => {
    // Handle answer action, e.g., navigate to answer page or open modal
    console.log('Answer query:', queryId);
  };

  return (
    <Container>
      <Title>Expert Dashboard</Title>
      {queries.map(query => (
        <QueryCard key={query.id}>
          <QueryDetails>
            <QueryDetail><QueryLabel>Name:</QueryLabel> {query.name}</QueryDetail>
            <QueryDetail><QueryLabel>Phone:</QueryLabel> {query.phone}</QueryDetail>
            <QueryDetail><QueryLabel>Place:</QueryLabel> {query.place}</QueryDetail>
            <QueryDetail><QueryLabel>Query:</QueryLabel> {query.query}</QueryDetail>
            <QueryDetail><QueryLabel>Translated Query:</QueryLabel> {query.translatedQuery}</QueryDetail>
          </QueryDetails>
          <Button onClick={() => handleAnswerClick(query.id)}>Answer Query</Button>
        </QueryCard>
      ))}
    </Container>
  );
};

export default ExpertDashboard;
