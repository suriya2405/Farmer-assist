// src/components/WelcomePage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/farm.jpg') no-repeat center center fixed;
  background-size: cover;
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

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
`;

const ToggleLink = styled.a`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const WelcomePage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    navigate('/home');
  };

  const handleRegisterSubmit = () => {
    navigate('/home');
  };

  const handleExpertRegisterClick = () => {
    navigate('/expert-register');
  };

  return (
    <Container>
      <Card>
        <Heading>Welcome to Farmer Assist</Heading>
        {showLogin ? (
          <>
            <LoginForm onSubmit={handleLoginSubmit} />
            <p>
              Don't have an account?{' '}
              <ToggleLink onClick={() => setShowLogin(false)}>
                Register here
              </ToggleLink>
            </p>
          </>
        ) : (
          <>
            <RegisterForm onSubmit={handleRegisterSubmit} />
            <p>
              Already have an account?{' '}
              <ToggleLink onClick={() => setShowLogin(true)}>
                Login here
              </ToggleLink>
            </p>
          </>
        )}
        <button
          onClick={handleExpertRegisterClick}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 mt-4"
        >
          Expert Register
        </button>
      </Card>
    </Container>
  );
};

export default WelcomePage;
