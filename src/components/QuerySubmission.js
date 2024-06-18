// src/components/QuerySubmission.js

import React from 'react';
import QuerySubmissionForm from './QuerySubmissionForm';

const QuerySubmission = () => {
  return (
    <div className="min-h-screen p-8" style={{ background: 'linear-gradient(to top, #0fd850 0%, #f9f047 100%)' }}>
      <h1 className="text-4xl font-bold mb-4 text-black">Query Submission</h1>
      <QuerySubmissionForm />
    </div>
  );
};

export default QuerySubmission;
