import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormBuilder from './components/pages/FormBuilder';
import FormView from './components/pages/FormViewer';
import Submissions from './components/pages/Submissions';
import { FormProvider } from './components/context/FormContext';

const App: React.FC = () => (
  <FormProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/view-form" element={<FormView />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
    </Router>
  </FormProvider>
);

export default App;
