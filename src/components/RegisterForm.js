// src/components/RegisterForm.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
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

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Registering user:', { email, password }); // Debug log
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully'); // Debug log
      onSubmit(e); // Navigate to home
    } catch (error) {
      console.error('Error registering:', error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
