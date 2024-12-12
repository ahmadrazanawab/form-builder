import React from 'react';
import { useFormContext } from '../context/FormContext';

const Submissions: React.FC = () => {
  const { submissions } = useFormContext();
  console.log(submissions)
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index} className="border-b p-2">
                {JSON.stringify(submission)}
                {submission.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submissions;
