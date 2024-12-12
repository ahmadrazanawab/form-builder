import React, { useState } from 'react';
import { useFormContext } from '../context/FormContext';
import { Link } from 'react-router-dom';

const FormBuilder: React.FC = () => {
    const { fields, addField, removeField } = useFormContext();
    const [label, setLabel] = useState('');
    const [type, setType] = useState('text');
    const [placeholder, setPlaceholder] = useState('');
    const [name, setName] = useState('');

    const handleAddField = () => {
        addField({ id: Date.now().toString(), label, type,name, placeholder });
        setLabel('');
        setName('')
        setPlaceholder('');
    };


    return (
        <div className="p-4 bg-slate-100">
            <div className='flex flex-col justify-center items-center'>
                <h2 className="text-xl font-bold mb-4">Build Your Form</h2>
                <div className="flex bg-white flex-col w-[50%] shadow-md   px-4 py-4 rounded">
                    <label htmlFor="">Enter Label</label>
                    <input
                        type="text"
                        className="border-[1px] border-gray-900 outline-teal-500 rounded  p-2 my-2 flex-grow"
                        placeholder="Enter your label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                    <select
                        className="border-[1px] border-gray-900 outline-teal-500 my-2 p-2 rounded"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="email">Email</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="textarea">TextArea</option>
                    </select>
                    <label htmlFor="">Enter type Name</label>
                    <input
                        type="text"
                        className="border-[1px] border-gray-900 outline-teal-500 rounded  p-2 my-2 flex-grow"
                        placeholder="Enter your type name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="">Enter Placeholder</label>
                    <input
                        type="text"
                        className="border-[1px] border-gray-900 outline-teal-500 rounded  p-2 my-2 flex-grow"
                        placeholder="Enter your placeholder"
                        value={placeholder} 
                        onChange={(e) => setPlaceholder(e.target.value)}
                    />
                    <div>
                    <button onClick={handleAddField} className="bg-green-500 my-2 w-[20%] rounded hover:bg-green-700 text-white px-4 py-2">
                        Add
                    </button>
                    </div>
                </div>
                <div className='w-[50%] mt-4 shadow-md rounded'>
                {fields.length === 0 ?<h1 className='py-4 px-2 rounded bg-white text-2xl font-serif'>Opps! Not fields.Create One</h1>: <ul className='p-4 bg-white rounded'>
                    {fields.map((field) => (
                        <li key={field.id} className="flex my-2 justify-between border-b-2  p-2">
                            {field.label} ({field.type})
                            <button
                                onClick={() => removeField(field.id)}
                                className="text-red-500"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                        <div className='my-4'>
                            <Link to='/view-form' className='bg-green-600 text-white border-[1px] border-green-600 px-3 py-2 rounded'>Show Form</Link>
                       </div>
                </ul>}
                </div>
            </div>
        </div>
    );
};

export default FormBuilder;
