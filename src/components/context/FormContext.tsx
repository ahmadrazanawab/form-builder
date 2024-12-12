import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormField } from '../types/FormField';

interface FormContextType {
  fields: FormField[];
  addField: (field: FormField) => void;
  removeField: (id: string) => void;
  submissions: Record<string, string>[];
  addSubmission: (submission: Record<string, string>) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [submissions, setSubmissions] = useState<Record<string, string>[]>([]);

  const addField = (field: FormField) => setFields((prev) => [...prev, field]);
  const removeField = (id: string) =>
    setFields((prev) => prev.filter((field) => field.id !== id));
  const addSubmission = (submission: Record<string, string>) =>
    setSubmissions((prev) => [...prev, submission]);

  return (
    <FormContext.Provider value={{ fields, addField, removeField, submissions, addSubmission }}>
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
