// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AgriculturalSchemes from './components/AgriculturalSchemes';
import ExpertDashboard from './components/ExpertDashboard';
import ExpertRegisterForm from './components/ExpertRegisterForm';
import HomePage from './components/HomePage';
import LatestTechnologies from './components/LatestTechnologies';
import QuerySubmissionForm from './components/QuerySubmissionForm';
import WelcomePage from './components/WelcomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/query-submission" element={<QuerySubmissionForm />} />
        <Route path="/agricultural-schemes" element={<AgriculturalSchemes />} />
        <Route path="/latest-technologies" element={<LatestTechnologies />} />
        <Route path="/expert-register" element={<ExpertRegisterForm />} />
        <Route path="/expert-dashboard" element={<ExpertDashboard />} />
        
      
      </Routes>
    </Router>
  );
};

export default App;
