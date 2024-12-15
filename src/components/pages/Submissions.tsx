import React, { useEffect } from 'react';
import { useFormContext } from '../context/FormContext';

const Submissions: React.FC = () => {
  const { submissions,fetchform}= useFormContext();
    console.log(submissions)
    useEffect(() => {
        fetchform()
    }, []);
  return (
    <div className="bg-slate-100 p-4">
      <h2 className="text-xl font-bold mb-4">Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index} className="border-b-4 my-2  p-4">
                {JSON.stringify(submission)}
                {submission.type}
          </li>
        ))}
          </ul>
    </div>
  );
};

export default Submissions;
