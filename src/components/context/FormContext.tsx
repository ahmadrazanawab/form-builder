import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormField } from '../types/FormField';

interface FormContextType {
    fields: FormField[];
    setFields: (fields: FormField[]) => void;
   addField: (field: FormField) => void;
   removeField: (id: string) => void;
   fetchform: () => void;
    addForm: (formName: string, fields:FormField[]) => void;
    type: string;
    setType: (type:string)=> void;
    formName: string;
    setFname: (formName:string) => void;
    submissions: Record<string, string>[];
    addSubmission: (submission: Record<string, string>) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [submissions, setSubmissions] = useState<Record<string, string>[]>([]);
    const [type, setType] = useState<string>('text');
    const [formName, setFname] = useState<string>(''); 
    const host = "http://localhost:5001";
    // fetch all form
    const fetchform:any = async() => {
        const response = await fetch(`${host}/api/fetchallform`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
            },
        })
        const json = await response.json();
        setSubmissions(json);
        console.log(json);
    }
    
    const addForm = async(formName:string,fields:FormField[]) => {
        const response = await fetch(`${host}/api/forms`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({formName,fields})
        })
        const field = await response.json();
        // setSubmissions((prev) => [...prev, field])
        setSubmissions((prev) => [...prev, field])
        console.log(field);
    }
    
    const addField = (field: FormField) => setFields((prev) => [...prev, field]);
    
  const removeField = (id: string) =>
  setFields((prev) => prev.filter((field) => field.id !== id));
  const addSubmission = (submission: Record<string, string>) =>
    setSubmissions((prev) => [...prev, submission]);

  return (
    <FormContext.Provider value={{fields,setFields,addField, removeField, submissions, addSubmission,fetchform,formName, setFname,type, setType,addForm}}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
