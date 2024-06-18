import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import styled from 'styled-components';
import { db } from '../firebase'; // Ensure correct Firebase import

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: black;
  text-align: left;
  margin-bottom: 30px;
  margin-left: 20px; /* Add margin-left to push it away from the left edge */
`;


const QuerySubmissionForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [query, setQuery] = useState('');
  const [translatedQuery, setTranslatedQuery] = useState('');
  const [file, setFile] = useState(null);

  const handleTranslate = async () => {
    try {
      const response = await axios.post('https://libretranslate.com/translate', {
        q: query,
        source: 'auto',
        target: 'en',
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setTranslatedQuery(response.data.translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedQuery('Translation failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the query to Firestore
      const docRef = await addDoc(collection(db, 'queries'), {
        name,
        phone,
        place,
        query,
        translatedQuery,
        file: file ? file.name : null, // Storing only file name; you need additional steps to handle file uploads
        timestamp: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);

      // Reset form fields after submission
      setName('');
      setPhone('');
      setPlace('');
      setQuery('');
      setTranslatedQuery('');
      setFile(null);

      alert('Query submitted successfully!');
    } catch (error) {
      console.error('Error submitting query: ', error);
      alert('Failed to submit query. Please try again.');
    }
  };

  return (
    <PageContainer>
      <div className="text-center">
        <Heading><b>Query Submission</b></Heading>
      </div>
      <FormCard onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
        <TextArea
          placeholder="Problem/Query"
          rows={3}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <Button type="button" onClick={handleTranslate}>Translate to English</Button>
        <TextArea
          placeholder="Translated Query"
          rows={3}
          value={translatedQuery}
          readOnly
        />
        <ReactMediaRecorder
          audio
          render={({ startRecording, stopRecording, mediaBlobUrl }) => (
            <>
              <Button type="button" onClick={startRecording}>Start Recording</Button>
              <Button type="button" onClick={stopRecording}>Stop Recording</Button>
              {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
            </>
          )}
        />
        <Input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button type="submit">Submit Query</Button>
      </FormCard>
    </PageContainer>
  );
};

export default QuerySubmissionForm;
