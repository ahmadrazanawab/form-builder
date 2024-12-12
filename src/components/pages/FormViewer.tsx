import React, { useState } from 'react';
import { useFormContext } from '../context/FormContext';

const FormView: React.FC = () => {
  const { fields, addSubmission } = useFormContext();
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmission(formState);
      setFormState({});  
      console.log(setFormState);
    };
    

  return (
      <div className="p-4 bg-slate-100">
      <div className='flex flex-col items-center mt-5 mb-3'>
        <form onSubmit={handleSubmit} className="shadow-md bg-white rounded p-6 flex flex-col w-[50%] justify-center space-y-4">
        <h2 className="text-xl font-bold mb-2">Form</h2>
        {fields.map((field) => (
          <div key={field.id}>
            <label className="block">{field.label}</label>
            <input
              type={field.type}
              value={formState[field.id] || ''}
              placeholder={field.placeholder} 
              name={field.name}      
              onChange={(e) =>
                setFormState({ ...formState, [field.id]: e.target.value })
              }
              className="border-[1px] border-gray-900 outline-teal-500 rounded p-2 w-full"
            />
          </div>
        ))}
        <div className=''>
         <button type="submit" className="bg-blue-500 rounded text-white px-4 py-2">
          Submit
        </button>
       </div>
        </form>
      </div>
    </div>
  );
};

export default FormView;
