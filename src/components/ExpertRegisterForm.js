// src/components/ExpertRegisterForm.js

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

const ToggleLink = styled.a`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const ExpertRegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/expert-dashboard');
    } catch (error) {
      console.error('Error with authentication:', error);
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <Container>
      <Card>
        <h2>{isRegistering ? 'Expert Register' : 'Expert Login'}</h2>
        <Form onSubmit={handleRegister}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">{isRegistering ? 'Register' : 'Login'}</Button>
          <ToggleLink onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Already have an account? Login here' : 'New here? Register as an expert'}
          </ToggleLink>
        </Form>
      </Card>
    </Container>
  );
};

export default ExpertRegisterForm;
