import React, { useState } from 'react';
import { useFormContext } from '../context/FormContext';
import { Link } from 'react-router-dom';



const FormView: React.FC = () => {
  const { fields, setFields,addSubmission,formName,addForm} = useFormContext();
    const [formState, setFormState] = useState<Record<string, string>>({});
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      addSubmission(formState);
      addForm(formName, fields);
      setFields(fields);
      setFormState(formState)
      alert('Form your sumitted successfully!')
    };  
    
  return (
      <div className="p-4 bg-slate-100 md:min-h-[100vh]">
      <div className='flex flex-col items-center mt-5 mb-3'>
        <form onSubmit={handleSubmit} className="shadow-md bg-white rounded p-6 flex flex-col w-[50%] justify-center space-y-4">
                  <h2 className="text-xl font-bold mb-2">{formName}</h2>
        {fields.length ===0? <h4>No Form Here.Create New One</h4>: fields.map((field) => (
        <div key={field.id}>    
            <label className="block">{field.label}</label>
            <input
              type={field.type}
              value={formState[field.id] || ''}
              placeholder={field.placeholder} 
              name={field.name}      
                    onChange={(e) => {
                    setFormState({ ...formState, [field.id]: e.target.value })
                 }}
              className="border-[1px] border-gray-900 outline-teal-500 rounded p-2 w-full"
            />
          </div>
        ))}
        <div className=''>
         {fields.length === 0 ?<Link to="/" className="bg-blue-500 rounded text-white px-4 py-2">
          Create New Form
        </Link>:
        <button type="submit"  className="bg-blue-500 rounded text-white px-4 py-2">
          Submit
        </button>}
       </div>
        </form>
      </div>
    </div>
  );
};

export default FormView;
