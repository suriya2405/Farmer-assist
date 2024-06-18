// src/components/LoginForm.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { auth } from '../firebase';

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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExpertRegisterLink = styled(Button)`
  background-color: #28a745; /* Green color for expert register */
  margin-top: 5px; /* Slightly reduced margin for closer proximity to login button */

  &:hover {
    background-color: #218838; /* Darker shade of green on hover */
  }
`;

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in! Navigating to homepage...');
      setTimeout(onSubmit, 3000); // Delay navigation to show the toast
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Login</Button>
        <ExpertRegisterLink onClick={() => { /* Handle expert register action */ }}>
          Expert Register
        </ExpertRegisterLink>
      </Form>
    </>
  );
};

export default LoginForm;
